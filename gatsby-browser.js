require('prism-theme-night-owl')
require('prismjs/plugins/line-numbers/prism-line-numbers.css')

/**
 * Alert visitors that new data is avail since data comes from a service worker
 */
exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Hey! There's some new data since you last visited.` +
      `Reload the page to display the latest version?`
  )

  if (answer === true) {
    caches
      .keys()
      .then(names => {
        for (let name of names) {
          caches.delete(name)
        }
      })
      .then(() => {
        window.location.reload()
      })
  }
}

/**
 * Set focus on skip to content if navigating from a previous page. Allows for easier toggling if navigating around
 */
exports.onRouteUpdate = ({ prevLocation }) => {
  if (prevLocation === null) {
    return
  }

  const skipLink = document.querySelector('#reach-skip-nav')

  if (!skipLink) {
    return
  }

  skipLink.focus()
}
