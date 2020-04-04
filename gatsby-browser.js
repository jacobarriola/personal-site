require('prism-theme-night-owl')
require('prismjs/plugins/line-numbers/prism-line-numbers.css')

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

/**
 * Alert visitors that new data is avail
 */
exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
