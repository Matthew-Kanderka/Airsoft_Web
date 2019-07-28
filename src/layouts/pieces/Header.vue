<template>
    <header>

        <div class="header-inner">
            <LazyHydrate on-idle>
                <Nav class="flex-fit"/>
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

    .flex-fit {
        flex: 1;
    }


</style>