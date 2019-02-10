<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">

      <b-navbar-brand :to="{name: 'Home'}">Humming Bird Airsoft Solutions</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item :to="{name: 'Services'}">Services</b-nav-item>
          <b-nav-item :to="{name: 'Q&A'}">Q & A</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{name: 'Contact'}">Contact Us</b-nav-item>
        </b-navbar-nav>

      </b-collapse>

    </b-navbar>

    <router-view />

  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  img {
    height: 15%;
    width: 15%;
  }
</style>
