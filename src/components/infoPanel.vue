<template>
    <div >
        <g-image :src=info.photo alt=""></g-image>

        <b-button style="" class="btn-lg" :to="info.redirectTo">
            {{info.name}}
        </b-button>
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

    a.btn.btn-lg.btn-secondary {
        display: block;
        width: 50%;
        margin: 10px auto;
    }
</style>