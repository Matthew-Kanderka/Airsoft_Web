<template>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">

        <Logo class="navbar-brand"></Logo>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

            <g-link class="nav-item" to="/services">
                <span>Services</span>
            </g-link>

            <g-link class="nav-item" to="/qand-a">
                <span>Q & A</span>
            </g-link>

            <g-link class="nav-item ml-auto" to="/contact">
                <span>Contact</span>
            </g-link>
        </div>
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
        color: gray;
    }
</style>