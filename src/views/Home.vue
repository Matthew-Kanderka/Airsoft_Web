<template>
<div>
    <b-jumbotron class="text-left">
        <template slot="header">
            Airsoft Services
        </template>

        <template slot="lead">
            airsoft
        </template>

        <img src="https://www.evike.com/images/large/cyma-29163.jpg" alt="">
    </b-jumbotron>

    <b-container class="bv-example-row">
        <b-row>
            <b-col><info-panel/></b-col>
            <b-col><info-panel/></b-col>
            <b-col><info-panel/></b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
    import infoPanel from '../components/infoPanel'

    export default {
        name: "home",
        components: {
            infoPanel
        }
    }
</script>

<style scoped>

</style>