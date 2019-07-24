<template>
    <div >
        <g-image :src=info.photo alt=""></g-image>

        <g-link :to="info.redirectTo" class="button primary button-large">
            {{info.name}}
        </g-link>

        <!--<b-button block class="btn" :to="info.redirectTo">-->
            <!--{{info.name}}-->
        <!--</b-button>-->
    </div>
</template>

<script>
    export default {
        name: "infoPanel",
        props: ['info']
    }
</script>

<style scoped>

    img {
        width: 40%;
        height: 100%;
    }
</style>