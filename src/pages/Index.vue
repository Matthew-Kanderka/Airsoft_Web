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

    <div class="container">
        <h1>Extensive Qualifications & Experience</h1>


        <div class="grid-cols">

            <Card :title="' '" :image="design1">
                <ul>
                    <li>Mechanical Engineering Technologist</li>
                    <li>Computer Science Software Developer</li>
                    <li>3D Design</li>
                </ul>
            </Card>

            <Card :title="' '" :image="design2">
                <ul>
                    <li>Database creation management</li>
                    <li>Electrical soldering & troubleshooting</li>
                    <li>Machining</li>
                </ul>
            </Card>

            <Card :title="' '" :image="design3">
                <ul>
                    <li>Root-Cause Analysis</li>
                    <li>Data Analysis</li>
                    <li>Workplace Compliance</li>
                </ul>
            </Card>
        </div>

        <h1>Precision</h1>


        <div class="grid-cols">

            <Card :title="'Industry Leading Equipment'" :image="precision1">
                <ul>
                    <li>Fluke</li>
                    <li>AceTech</li>
                    <li>Siglent</li>
                    <li>FlashForge</li>
                </ul>
            </Card>

            <Card :title="'Quality Material Selection'" :image="precision2">
                <ul>
                    <li>C360 Brass</li>
                    <li>ABS Plastic</li>
                    <li>Dow Corning</li>
                </ul>
            </Card>

            <Card :title="'Cutting Edge Verifications'" :image="precision3">
                <ul>
                    <li>Current Profiles</li>
                    <li>Shot Authentication</li>
                    <li>Velocity Consistency</li>
                </ul>
            </Card>
        </div>

        <h1>Professional Workflow</h1>

        <div class="grid-cols">

            <Card :title="' '" :image="workflow1">
                <ul>
                    <li>Personalized service based on unique needs</li>
                    <li>Reliable and consistant communication with customers</li>
                </ul>
            </Card>

            <Card :title="' '" :image="workflow2">
                <ul>
                    <li>Data driven decisions</li>
                    <li>Excellent customer service</li>
                </ul>
            </Card>
        </div>
    </div>

    <div>
        <br>
    </div>
</div>
    </Layout>
</template>

<script>
    import infoPanel from '../components/home/infoPanel'

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
                precision1: require('../assets/MNFG1-thumb.webp'),
                precision2 : require('../assets/MNFG2-thumb.webp'),
                precision3 : require('../assets/MNFG3-thumb.webp'),
                workflow1: require('../assets/PROWF1-thumb.webp'),
                workflow2: require('../assets/PROWF2-thumb.webp'),
            }
        }
    }
</script>

<style scoped>

    .grid-cols {
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(26%, 1fr) );

        grid-gap: 25px;
    }

    h1{
        margin-top: 16px;
        margin-bottom: 16px;
    }

    ul {
        padding-left: 0;
        list-style-type: none;
    }

    @media screen and (max-width: 850px) {
        .grid-cols{
            grid-template-columns: repeat(2, 1fr);
        }

        .grid-cols--full-md{
            grid-template-columns: repeat(1, 1fr);
        }
    }

    @media screen and (max-width: 550px) {
        .grid-cols {
            grid-template-columns: repeat(1, 1fr);
        }
    }

</style>