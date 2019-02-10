<template>
<div>
    <b-jumbotron class="text-left">
        <template slot="header">
            Airsoft Services
        </template>

        <template slot="lead">
            Mission Statement: Uncompromized quality and performance that push airsoft standards.
        </template>

        <img src="https://www.evike.com/images/large/cyma-29163.jpg" alt="">
    </b-jumbotron>

    <b-container class="bv-example-row">
        <b-row>
            <b-col v-for="i in infos">
                <infoPanel :info=i></infoPanel>
            </b-col>
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
        },
        data() {
            return {
                infos: [
                    {
                        name: 'Services',
                        description: 'See the services we provide',
                        redirectTo: 'Services'
                    },
                    {
                        name: 'Q & A',
                        description: 'Common questions asked',
                        redirectTo: 'Q&A'
                    },
                    {
                        name: 'Contact Us',
                        description: 'Get in touch with us',
                        redirectTo: 'Contact'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>