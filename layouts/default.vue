<template>
  <div>
    <header class="masthead">
      <nav class="site-navigation">
        <nuxt-link to="/" active-class="is-active" class="nav-item" >Home</nuxt-link>
        <nuxt-link to="/about" active-class="is-active" class="nav-item">About</nuxt-link>
      </nav>
    </header>
    <div class="container">
      <nuxt/>
    </div>
    <footer class="site-footer">
        <ul class="footer-list" role="navigation">
          <li><a class="footer-list-item" href="https://twitter.com/jacobarriola">Twitter</a></li>
          <li><a href="https://github.com/jacobarriola/personal-site" class="footer-list-item">Source Code</a></li>
        </ul>
    </footer>
  </div>
</template>

<style lang="scss">

.container {
	margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.25em;
  min-height: 70vh;
	max-width: 40em;
	padding-left: 1em;
	padding-right: 1em;
}

</style>
