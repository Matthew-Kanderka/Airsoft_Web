<template>
    <div >
        <img src="../assets/GB.png" alt="">

        <b-button class="btn-lg" :to="{name: info.redirectTo}">
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
    .pan {
        background: #e9ecef;
        border-style: solid;
        border-width: 1px;
    }

    .button {
        margin-bottom: 10px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>