const fetch = require('cross-fetch')
const { updateGithubStatus } = require('./github')

module.exports = {
  onSuccess: async ({ utils }) => {
    // Only run this in PR deploys
    const context = process.env.CONTEXT
    if (!context) {
      // eslint-disable-next-line no-console
      console.log(`No context. Skipping Ghost Inspector tests.`)
      return
    }
    if (context !== 'deploy-preview') {
      // eslint-disable-next-line no-console
      console.log(`Not in deploy-preview. Skipping Ghost Inspector tests.`)
      return
    }

    // Check to make sure we have a public URL to test against
    const deployUrl = process.env.DEPLOY_PRIME_URL
    if (!deployUrl) {
      // eslint-disable-next-line no-console
      console.log(`No deployUrl. Skipping Ghost Inspector tests.`)
      return
    }

    // Check to ensure we have our API key
    const ghostInspectorapiKey = process.env.GHOST_INSPECTOR_API_KEY
    if (!ghostInspectorapiKey) {
      return utils.build.failPlugin(
        `Missing env variable for GHOST_INSPECTOR_API_KEY`
      )
    }

    // Check to ensure we have our Suite ID
    const suiteId = process.env.GHOST_INSPECTOR_SUITE
    if (!suiteId) {
      return utils.build.failPlugin(
        `Missing env variable for GHOST_INSPECTOR_SUITE`
      )
    }

    const githubApiToken = process.env.GITHUB_API_TOKEN
    if (!githubApiToken) {
      return utils.build.failPlugin(`Missing env variable GITHUB_API_TOKEN`)
    }

    try {
      // eslint-disable-next-line no-console
      console.log(`🚀 Starting Ghost Inspector E2E tests on ${deployUrl} ...`)

      // Make API request to Ghost Inspector API
      const res = await fetch(
        `https://api.ghostinspector.com/v1/suites/${suiteId}/execute/?apiKey=${ghostInspectorapiKey}&startUrl=${deployUrl}`
      )

      if (res.status >= 400) {
        throw new Error(`Bad response from Ghost Inspector server.`)
      }

      const result = await res.json()

      const didTestsPass = result.data.every(test => test.passing === true)

      if (false === didTestsPass) {
        const testResult = result.data.map(({ name, passing }) => {
          return { name, passing }
        })

        // Send a failure status to the GitHub commit
        await updateGithubStatus({
          auth: githubApiToken,
          sha: process.env.COMMIT_REF,
          state: 'failure',
          target_url: `https://app.ghostinspector.com/suites/${suiteId}`,
        })

        return utils.build.failBuild(
          `Ghost Inspector test failed. Failed tests:`,
          testResult
        )
      }

      // eslint-disable-next-line no-console
      console.log(`✅ All Ghost Inspector tests passed!`)

      // Send a success status to the Github commit
      await updateGithubStatus({
        auth: githubApiToken,
        sha: process.env.COMMIT_REF,
        state: 'success',
        target_url: `https://app.ghostinspector.com/suites/${suiteId}`,
      })

      return utils.status.show({
        title: `Ghost Inspector E2E tests`,
        summary: `✅ All tests passed`,
        text: `Visit https://app.ghostinspector.com/suites/${suiteId} for test results`,
      })
    } catch (error) {
      return utils.build.failPlugin(error.message)
    }
  },
}