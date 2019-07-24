<template>
    <header>

        <div class="header-inner">
            <LazyHydrate on-idle>
                <Nav class="flex-fit"></Nav>
            </LazyHydrate>
        </div>

    </header>
</template>

<script>
    import Logo from './Logo'
    import Nav from './Nav'
    import LazyHydrate from 'vue-lazy-hydration'

    export default {
        name: "Header",
        components: {
            Nav,
            Logo,
            LazyHydrate
        }
    }
</script>

<style scoped>
    a {
        color: white;
    }
</style>