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

            <Card>
                <g-image src="../assets/Des1-thumb.png"/>

                <ul>
                    <li>Mechanical Engineering Technologist</li>
                    <li>Computer Science Software Developer</li>
                    <li>3D Design</li>
                </ul>
            </Card>

            <Card>
                <g-image src="../assets/Des2-thumb.png"/>

                <ul>
                    <li>Database creation management</li>
                    <li>Electrical soldering & troubleshooting</li>
                    <li>Machining</li>
                </ul>
            </Card>

            <Card>
                <g-image src="../assets/Des3-thumb.png"/>

                <ul>
                    <li>Root-Cause Analysis</li>
                    <li>Data Analysis</li>
                    <li>Workplace Compliance</li>
                </ul>
            </Card>
        </div>

        <h1>Precision</h1>


        <div class="grid-cols">

            <Card>
                <g-image src="../assets/MNFG1-thumb.png"/>

                <h3>Industry Leading Equipment</h3>
                <ul>
                    <li>Fluke</li>
                    <li>AceTech</li>
                    <li>Siglent</li>
                    <li>FlashForge</li>
                </ul>
            </Card>

            <Card>
                <g-image src="../assets/MNFG2-thumb.png"/>

                <h3>Quality Material Selection</h3>
                <ul>
                    <li>C360 Brass</li>
                    <li>ABS Plastic</li>
                    <li>Dow Corning</li>
                </ul>
            </Card>

            <Card>
                <g-image src="../assets/MNFG3-thumb.png"/>

                <h3>Cutting Edge Verifications</h3>
                <ul>
                    <li>Current Profiles</li>
                    <li>Shot Authentication</li>
                    <li>Velocity Consistency</li>
                </ul>
            </Card>
        </div>

        <h1>Professional Workflow</h1>

        <div class="grid-cols">

            <Card>
                <g-image src="../assets/PROWF1-thumb.png"/>

                <ul>
                    <li>Personalized service based on unique needs</li>
                    <li>Reliable and consistant communication with customers</li>
                </ul>
            </Card>

            <Card>
                <g-image src="../assets/PROWF2-thumb.png"/>

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
                infos: [
                    {
                        name: 'Services',
                        description: 'See the services we provide',
                        photo: require('../assets/services-icon.png'),
                        redirectTo: '/services'
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
                        redirectTo: '/contact'
                    }
                ]
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

    img {
        max-height: 200px;
        width: auto;

    }

    h2{
        margin-top: 8px;
    }

    ul {
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