<template>
    <div class="pan">
        <h1>{{info.name}}</h1>

        <p>{{info.description}}</p>

        <b-button class="button" :to="{name: info.redirectTo}">
            See {{info.name}}
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
</style>