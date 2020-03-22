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
