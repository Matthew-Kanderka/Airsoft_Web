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
            <b-col :key="i" v-for="i in infos">
                <b-button size="lg" :to="{name: i.redirectTo}">{{i.name}}</b-button>
                <!--<infoPanel class="info" :info=i></infoPanel>-->
            </b-col>
        </b-row>
    </b-container>

    <div class="container">
        <h1>Extensive Qualifications & Experience</h1>

        <b-row class="row">
            <b-col>
                <img :src=design1 alt="">
                <h2>Mechanical Enigineering TEchnologiest</h2>
                <h2>Computer Science Software Developer</h2>
                <h2>3-D Design</h2>
                <!--<b-card class="image" :img-src="design1" img-top>-->
                    <!--<b-card-text>test</b-card-text>-->
                <!--</b-card>-->
            </b-col>
            <b-col>
                <img  :src=design2 alt="">
                <h2>Database creation & management</h2>
                <h2>Eletrical soldering & troublshooting</h2>
                <h2>Machining</h2>
                <!--<b-card class="image" :img-src="design2" img-top>-->
                    <!--<b-card-text>test</b-card-text>-->
                <!--</b-card>-->
            </b-col>
            <b-col>
                <img  :src=design3 alt="">
                <h2>Root Cause Analysis</h2>
                <h2>Data Analysis</h2>
                <h2>Work place compliance</h2>
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

        <h1>Precision</h1>

        <b-row class="row">
            <b-col>
                <img src="../assets/MNFG1.png" alt="">
                <h2>Industry Leading Equipment:</h2>
                <ul>
                    <li>Fluke</li>
                    <li>AceTech</li>
                    <li>Siglent</li>
                    <li>FlashForge</li>
                </ul>
            </b-col>
            <b-col>
                <img src="../assets/MNFG2.png" alt="">
                <h2>Quality Material Selection:</h2>
                <ul>
                    <li>C360 brass</li>
                    <li>ABS Plastic</li>
                    <li>Dow Corning</li>
                </ul>
            </b-col>
            <b-col>
                <img src="../assets/MNFG3.png" alt="">
                <h2>Cutting Edge Verifications:</h2>
                <ul>
                    <li>Current profiles</li>
                    <li>Shot Authentication</li>
                    <li>Velocity Consistency</li>
                </ul>
            </b-col>
        </b-row>

        <h1>Professional Workflow</h1>

        <b-row class="row">
            <b-col>
                <img src="../assets/PROWF1.png" alt="">
                <ul>
                    <li>Personalized service based on unique needs</li>
                    <li>Reliable and consistent communication with customers</li>
                </ul>
            </b-col>
            <b-col>
                <img src="../assets/PROWF2.png" alt="">
                <ul>
                    <li>Data driven decisions</li>
                    <li>Excellent customer service</li>
                </ul>
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