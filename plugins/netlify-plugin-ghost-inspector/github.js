const { Octokit } = require('@octokit/rest')

/**
 * Update a commit status in GitHub
 *
 * @param {String} auth - The GitHub personal token
 * @param {String} sha - The GitHub commit hash that will be updated
 * @param {String} state - The status to set
 * @param {String} target_url - The URL to add to the commit message
 *
 * @returns Promise
 */
exports.updateGithubStatus = async ({ auth, sha, state, target_url }) => {
  const octokit = new Octokit({ auth })

  try {
    await octokit.request('POST /repos/{owner}/{repo}/statuses/{sha}', {
      owner: 'jacobarriola',
      repo: 'personal-site',
      sha,
      state,
      description: `Tests ${state === 'success' ? 'passed!' : 'failed'}`,
      context: 'Ghost Inspector E2E Tests',
      target_url,
    })
  } catch (error) {
    throw Error(error)
  }
}
