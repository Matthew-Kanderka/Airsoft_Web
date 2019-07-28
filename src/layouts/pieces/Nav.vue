<template>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">

        <Logo class="navbar-brand"></Logo>

            <g-link class="nav-item" to="/services">
                <span>Services</span>
            </g-link>

            <g-link class="nav-item" to="/qand-a">
                <span>Q & A</span>
            </g-link>

            <g-link class="nav-item" to="/contact">
                <span>Contact</span>
            </g-link>
    </nav>
</template>

<script>
    import Logo from './Logo'

    export default {
        name: "Nav",
        components: {
            Logo
        }
    }
</script>

<style scoped>
    a {
        color: white;
        padding-right: 10px;
    }

</style>