<template>
    <Layout>
<div>
    <b-jumbotron class="text-left">
        <template slot="header">
            Airsoft Services
        </template>

        <template slot="lead">Uncompromized quality and performance that push airsoft standards.
        </template>

    </b-jumbotron>

    <b-container class="infoPanelRow">
        <b-row>
            <b-col :key="i.name" v-for="i in infos">
                <infoPanel class="info" :info=i></infoPanel>
            </b-col>
        </b-row>
    </b-container>

    <div class="container">
        <h1>Custom Design</h1>

        <b-row class="row">
            <b-col>
                <g-image :src="design1" alt=""></g-image>
                <h2>Text</h2>
                <!--<b-card class="image" :img-src="design1" img-top>-->
                    <!--<b-card-text>test</b-card-text>-->
                <!--</b-card>-->
            </b-col>
            <b-col>
                <g-image :src="design2" alt=""></g-image>
                <h2>Text</h2>
                <!--<b-card class="image" :img-src="design2" img-top>-->
                    <!--<b-card-text>test</b-card-text>-->
                <!--</b-card>-->
            </b-col>
            <b-col>
                <g-image :src="design3" alt=""></g-image>
                <h2>Text</h2>
                <!--<b-card class="image" :img-src="design3" img-top>-->
                    <!--<b-card-text>test</b-card-text>-->
                <!--</b-card>-->
            </b-col>
        </b-row>

        <!--<b-row class="row">-->
            <!--<b-col >-->
                <!--<img  :src=design4 alt="">-->
                <!--<h2>Text</h2>-->
                <!--&lt;!&ndash;<b-card class="image" :img-src="design1" img-top>&ndash;&gt;-->
                <!--&lt;!&ndash;<b-card-text>test</b-card-text>&ndash;&gt;-->
                <!--&lt;!&ndash;</b-card>&ndash;&gt;-->
            <!--</b-col>-->
            <!--<b-col>-->
                <!--<img  :src=design5 alt="">-->
                <!--<h2>Text</h2>-->
                <!--&lt;!&ndash;<b-card class="image" :img-src="design2" img-top>&ndash;&gt;-->
                <!--&lt;!&ndash;<b-card-text>test</b-card-text>&ndash;&gt;-->
                <!--&lt;!&ndash;</b-card>&ndash;&gt;-->
            <!--</b-col>-->
        <!--</b-row>-->

        <h1>Manufacturing</h1>

        <b-row class="row">
            <b-col>
                <g-image src="../assets/MNFG1-thumb.png" alt=""></g-image>
                <h2>text</h2>
            </b-col>
            <b-col>
                <g-image src="../assets/MNFG2-thumb.png" alt=""></g-image>
                <h2>text</h2>
            </b-col>
            <b-col>
                <g-image src="../assets/MNFG3-thumb.png" alt=""></g-image>
                <h2>text</h2>
            </b-col>
        </b-row>

        <h1>Professional Workflow</h1>

        <b-row class="row">
            <b-col>
                <g-image src="../assets/PROWF1-thumb.png" alt=""></g-image>
                <h2>text</h2>
            </b-col>
            <b-col>
                <g-image src="../assets/PROWF2-thumb.png" alt=""></g-image>
                <h2>text</h2>
            </b-col>
        </b-row>
    </div>

    <div>
        <br>
    </div>
</div>
    </Layout>
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
                design1: require('../assets/Des1-thumb.png'),
                design2: require('../assets/Des2-thumb.png'),
                design3: require('../assets/Des3-thumb.png'),
                design4: require('../assets/Des4-thumb.png'),
                design5: require('../assets/Des5-thumb.png'),
                infos: [
                    {
                        name: 'Services',
                        description: 'See the services we provide',
                        photo: require('../assets/services-icon.png'),
                        redirectTo: '/Services'
                    },
                    {
                        name: 'Q & A',
                        description: 'Common questions asked',
                        photo: require('../assets/question-icon.png'),
                        redirectTo: '/qand-a'
                    },
                    {
                        name: 'Contact Us',
                        description: 'Get in touch with us',
                        photo: require('../assets/contact.png'),
                        redirectTo: '/Contact'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

    img.g-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }

    div {
        margin-bottom: 10px;
    }


    h2{
        margin-top: 8px;
    }

    .row {
        margin-bottom: 50px;
    }

    .infoPanelRow {
        margin-top: 50px;
    }

</style>