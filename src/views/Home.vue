<template>
<div>
    <b-jumbotron class="text-left">
        <template slot="header">
            Airsoft Services
        </template>

        <template slot="lead">Uncompromized quality and performance that push airsoft standards.
        </template>

        <!--<img src="https://www.evike.com/images/large/cyma-29163.jpg" alt="">-->
    </b-jumbotron>

    <b-container class="bv-example-row">
        <b-row>
            <b-col v-for="i in infos">
                <b-button size="lg" :to="{name: i.redirectTo}">{{i.name}}</b-button>
                <!--<infoPanel class="info" :info=i></infoPanel>-->
            </b-col>
        </b-row>
    </b-container>

    <div class="container">
        <h1>Custom Design</h1>

        <b-row class="row">
            <b-col>
                <img :src=design1 alt="">
                <h2>Text</h2>
                <!--<b-card class="image" :img-src="design1" img-top>-->
                    <!--<b-card-text>test</b-card-text>-->
                <!--</b-card>-->
            </b-col>
            <b-col>
                <img  :src=design2 alt="">
                <h2>Text</h2>
                <!--<b-card class="image" :img-src="design2" img-top>-->
                    <!--<b-card-text>test</b-card-text>-->
                <!--</b-card>-->
            </b-col>
            <b-col>
                <img  :src=design3 alt="">
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
                <img src="../assets/MNFG1.png" alt="">
                <h2>text</h2>
            </b-col>
            <b-col>
                <img src="../assets/MNFG2.png" alt="">
                <h2>text</h2>
            </b-col>
            <b-col>
                <img src="../assets/MNFG3.png" alt="">
                <h2>text</h2>
            </b-col>
        </b-row>

        <h1>Professional Workflow</h1>

        <b-row class="row">
            <b-col>
                <img src="../assets/PROWF1.png" alt="">
                <h2>text</h2>
            </b-col>
            <b-col>
                <img src="../assets/PROWF2.png" alt="">
                <h2>text</h2>
            </b-col>
        </b-row>
    </div>

    <div>
        <br>
    </div>
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
                design1: require('../assets/Des1-test.png'),
                design2: require('../assets/Des2-sh.png'),
                design3: require('../assets/Des3.png'),
                design4: require('../assets/Des4-sm.png'),
                design5: require('../assets/Des5-sm.png'),
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

    img {
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
</style>