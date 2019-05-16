<template>
    <Layout>
<div>
    <b-jumbotron class="text-left">
        <template slot="header">
            Airsoft Services
        </template>

        <template slot="lead">Uncompromized quality and performance that exceeds airsoft standards.
        </template>

    </b-jumbotron>

    <b-container class="infoPanelRow">
        <b-row>
            <b-col :key="i.name" v-for="i in infos">
                <infoPanel class="info" :info=i></infoPanel>
            </b-col>
        </b-row>
    </b-container>

    <b-container>
        <div >
            <h1>Extensive Qualifications & Experience</h1>

            <b-card-group deck>
                <b-card :img-src="design1" img-top>
                    <b-card-text>
                        <ul>
                            <li>Mechanical Engineering Technologist</li>
                            <li>Computer Science Software Developer</li>
                            <li>3D Design</li>
                        </ul>
                    </b-card-text>
                </b-card>

                <b-card  :img-src="design2" img-top>
                    <b-card-text>
                        <ul>
                            <li>Database creation management</li>
                            <li>Electrical soldering & troubleshooting</li>
                            <li>Machining</li>
                        </ul>
                    </b-card-text>
                </b-card>

                <b-card :img-src="design3" img-top>
                    <b-card-text>
                        <ul>
                            <li>Root-Cause Analysis</li>
                            <li>Data Analysis</li>
                            <li>Workplace Compliance</li>
                        </ul>
                    </b-card-text>
                </b-card>
            </b-card-group>
            <!--<b-row>-->
                <!--<b-col>-->
                        <!--&lt;!&ndash;<b-img class="fix" rounded fluid-grow :src="design1" alt=""></b-img>&ndash;&gt;-->
                        <!--&lt;!&ndash;<ul>&ndash;&gt;-->
                            <!--&lt;!&ndash;<li>Mechanical Engineering Technologist</li>&ndash;&gt;-->
                            <!--&lt;!&ndash;<li>Computer Science Software Developer</li>&ndash;&gt;-->
                            <!--&lt;!&ndash;<li>3D Design</li>&ndash;&gt;-->
                        <!--&lt;!&ndash;</ul>&ndash;&gt;-->
                    <!--&lt;!&ndash;<b-card class="fix" :img-src="design1" img-top>&ndash;&gt;-->
                        <!--&lt;!&ndash;<b-card-text>&ndash;&gt;-->
                            <!--&lt;!&ndash;<ul>&ndash;&gt;-->
                                <!--&lt;!&ndash;<li>Mechanical Engineering Technologist</li>&ndash;&gt;-->
                                <!--&lt;!&ndash;<li>Computer Science Software Developer</li>&ndash;&gt;-->
                                <!--&lt;!&ndash;<li>3D Design</li>&ndash;&gt;-->
                            <!--&lt;!&ndash;</ul>&ndash;&gt;-->
                        <!--&lt;!&ndash;</b-card-text>&ndash;&gt;-->
                    <!--&lt;!&ndash;</b-card>&ndash;&gt;-->
                <!--</b-col>-->
                <!--<b-col>-->
                        <!--&lt;!&ndash;<b-img class="fix" rounded fluid-grow :src="design2" alt=""></b-img>&ndash;&gt;-->
                        <!--&lt;!&ndash;<ul>&ndash;&gt;-->
                            <!--&lt;!&ndash;<li>Database creation management</li>&ndash;&gt;-->
                            <!--&lt;!&ndash;<li>Electrical soldering & troubleshooting</li>&ndash;&gt;-->
                            <!--&lt;!&ndash;<li>Machining</li>&ndash;&gt;-->
                        <!--&lt;!&ndash;</ul>&ndash;&gt;-->
                    <!--&lt;!&ndash;<b-card class="fix" :img-src="design2" img-top>&ndash;&gt;-->
                        <!--&lt;!&ndash;<b-card-text>&ndash;&gt;-->
                            <!--&lt;!&ndash;<ul>&ndash;&gt;-->
                                <!--&lt;!&ndash;<li>Database creation management</li>&ndash;&gt;-->
                                <!--&lt;!&ndash;<li>Electrical soldering & troubleshooting</li>&ndash;&gt;-->
                                <!--&lt;!&ndash;<li>Machining</li>&ndash;&gt;-->
                            <!--&lt;!&ndash;</ul>&ndash;&gt;-->
                        <!--&lt;!&ndash;</b-card-text>&ndash;&gt;-->
                    <!--&lt;!&ndash;</b-card>&ndash;&gt;-->
                <!--</b-col>-->
                <!--<b-col>-->
                        <!--&lt;!&ndash;<b-img class="fix" rounded fluid-grow :src="design3" alt=""></b-img>&ndash;&gt;-->
                        <!--&lt;!&ndash;<ul>&ndash;&gt;-->
                            <!--&lt;!&ndash;<li>Root-Cause Analysis</li>&ndash;&gt;-->
                            <!--&lt;!&ndash;<li>Data Analysis</li>&ndash;&gt;-->
                            <!--&lt;!&ndash;<li>Workplace Compliance</li>&ndash;&gt;-->
                        <!--&lt;!&ndash;</ul>&ndash;&gt;-->
                    <!--<b-card class="fix" :img-src="design3" img-top>-->
                        <!--<b-card-text>-->
                            <!--<ul>-->
                                <!--<li>Root-Cause Analysis</li>-->
                                <!--<li>Data Analysis</li>-->
                                <!--<li>Workplace Compliance</li>-->
                            <!--</ul>-->
                        <!--</b-card-text>-->
                    <!--</b-card>-->
                <!--</b-col>-->
            <!--</b-row>-->
        </div>

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

        <div>
            <h1>Precision</h1>

            <b-card-group deck>
                <b-card :img-src="precision1" img-top>
                    <b-card-text>
                        <h3>Industry Leading Equipment</h3>
                        <ul>
                            <li>Fluke</li>
                            <li>AceTech</li>
                            <li>Siglent</li>
                            <li>FlashForge</li>
                        </ul>
                    </b-card-text>
                </b-card>

                <b-card :img-src="precision2" img-top>
                    <b-card-text>
                        <h3>Quality Material Selection</h3>
                        <ul>
                            <li>C360 Brass</li>
                            <li>ABS Plastic</li>
                            <li>Dow Corning</li>
                        </ul>
                    </b-card-text>
                </b-card>

                <b-card :img-src="precision3" img-top>
                    <b-card-text>
                        <h3>Cutting Edge Verifications</h3>
                        <ul>
                            <li>Current Profiles</li>
                            <li>Shot Authentication</li>
                            <li>Velocity Consistency</li>
                        </ul>
                    </b-card-text>
                </b-card>
            </b-card-group>

            <!--<b-row>-->
                <!--<b-col>-->
                        <!--<b-img rounded fluid-grow :src="precision1" alt=""></b-img>-->
                        <!--<h3>Industry Leading Equipment</h3>-->
                        <!--<ul>-->
                            <!--<li>Fluke</li>-->
                            <!--<li>AceTech</li>-->
                            <!--<li>Siglent</li>-->
                            <!--<li>FlashForge</li>-->
                        <!--</ul>-->
                <!--</b-col>-->
                <!--<b-col>-->
                        <!--<b-img rounded fluid-grow :src="precision2" alt=""></b-img>-->
                        <!--<h3>Quality Material Selection</h3>-->
                        <!--<ul>-->
                            <!--<li>C360 Brass</li>-->
                            <!--<li>ABS Plastic</li>-->
                            <!--<li>Dow Corning</li>-->
                        <!--</ul>-->
                <!--</b-col>-->
                <!--<b-col>-->
                        <!--<b-img rounded fluid-grow :src="precision3" alt=""></b-img>-->
                        <!--<h3>Cutting Edge Verifications</h3>-->
                        <!--<ul>-->
                            <!--<li>Current Profiles</li>-->
                            <!--<li>Shot Authentication</li>-->
                            <!--<li>Velocity Consistency</li>-->
                        <!--</ul>-->
                <!--</b-col>-->
            <!--</b-row>-->
        </div>

        <div>
            <h1>Professional Workflow</h1>

            <b-card-group deck>
                <b-card :img-src="workflow1" img-top>
                    <b-card-text>
                        <ul>
                            <li>Personalized service based on unique needs</li>
                            <li>Reliable and consistant communication with customers</li>
                        </ul>
                    </b-card-text>
                </b-card>

                <b-card :img-src="workflow2" img-top>
                    <b-card-text>
                        <ul>
                            <li>Data driven decisions</li>
                            <li>Excellent customer service</li>
                        </ul>
                    </b-card-text>
                </b-card>
            </b-card-group>

            <!--<b-row>-->
                <!--<b-col>-->
                        <!--<b-img rounded fluid-grow :src="workflow1" alt=""></b-img>-->
                        <!--<ul>-->
                            <!--<li>Personalized service based on unique needs</li>-->
                            <!--<li>Reliable and consistant communication with customers</li>-->
                        <!--</ul>-->
                <!--</b-col>-->
                <!--<b-col>-->
                        <!--<b-img rounded fluid-grow :src="workflow2" alt=""></b-img>-->
                        <!--<ul>-->
                            <!--<li>Data driven decisions</li>-->
                            <!--<li>Excellent customer service</li>-->
                        <!--</ul>-->
                <!--</b-col>-->
            <!--</b-row>-->
        </div>
    </b-container>

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
                design1: require('../assets/Des1-thumb.webp'),
                design2: require('../assets/Des2-thumb.webp'),
                design3: require('../assets/Des3-thumb.webp'),
                design4: require('../assets/Des4-thumb.webp'),
                design5: require('../assets/Des5-thumb.webp'),
                precision1: require('../assets/MNFG1-thumb.webp'),
                precision2 : require('../assets/MNFG2-thumb.webp'),
                precision3 : require('../assets/MNFG3-thumb.webp'),
                workflow1: require('../assets/PROWF1-thumb.webp'),
                workflow2: require('../assets/PROWF2-thumb.webp'),
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

    /*img.card-img-top {*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*object-fit: cover;*/
    /*}*/

    .fix {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    div {
        margin-bottom: 10px;
    }


    h2{
        margin-top: 8px;
    }

    .infoPanelRow {
        margin-top: 50px;
    }

    ul {
        list-style-type: none;
    }
</style>