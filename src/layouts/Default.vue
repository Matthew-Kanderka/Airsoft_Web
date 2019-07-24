<template>
  <div id="app">
    <Header></Header>
    <main id="main">
      <slot></slot>
    </main>
    <!--<b-navbar toggleable="md" type="dark" variant="dark">-->

      <!--<b-navbar-brand to="/">Humming Bird Airsoft Solutions</b-navbar-brand>-->

      <!--<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>-->

      <!--<b-collapse is-nav id="nav_collapse">-->

        <!--<b-navbar-nav>-->
          <!--<b-nav-item to="/services">Services</b-nav-item>-->
          <!--<b-nav-item to="/qand-a">Q & A</b-nav-item>-->
        <!--</b-navbar-nav>-->

        <!--&lt;!&ndash; Right aligned nav items &ndash;&gt;-->
        <!--<b-navbar-nav class="ml-auto">-->
          <!--<b-nav-item to="/contact">Contact Us</b-nav-item>-->
        <!--</b-navbar-nav>-->

      <!--</b-collapse>-->

    <!--</b-navbar>-->

    <!--<slot />-->

  </div>
</template>

<script>

  import Header from "./pieces/Header";
  export default {
    name: 'app',
    components: {Header}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
