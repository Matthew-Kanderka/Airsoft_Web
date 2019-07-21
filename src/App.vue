<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">

      <b-navbar-brand :to="{name: 'Home'}">Humming Bird Airsoft Solutions</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <g-link to="/Services"><b-nav-item>Services</b-nav-item></g-link>
          <g-link to="/Q&A"><b-nav-item>Q & A</b-nav-item></g-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <g-link to="/Contact"><b-nav-item >Contact Us</b-nav-item></g-link>
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
</style>
