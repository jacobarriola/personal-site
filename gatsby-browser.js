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

exports.onServiceWorkerUpdateReady = ({ serviceWorker }) => {
  console(`service worker ready`, serviceWorker)
}

exports.onServiceWorkerUpdateFound = ({ serviceWorker }) => {
  console(`service worker found`, serviceWorker)
}
