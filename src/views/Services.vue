<template>
    <div class="container">

        <h1>Services</h1>

        <ul>
            <service-panel :service=service v-for="service in services"/>
        </ul>
    </div>
</template>

<script>
    import servicePanel from '../components/servicePanel'
    export default {
        name: "service",
        components: {
            servicePanel
        },
        data() {
            return {
                services: [
                    {
                        name: 'Enhanced Service - $69.95',
                        description: 'Cutting edge service provided with all findings documented and delivered at time of pickup.' +
                            ' All components checked for damage and excessive wear. Customers with be informed of possible upgrades',
                        tasks: ['Clean barrel', 'Check function of hop-up', 'Gear box', 'All batteries cycled and charged', 'Test FPS with 0.2, 0.5 and 0.3 bbs',
                            'Comprehensive functional test', 'All findings documented', '*Full RHop installation for $24.90'],
                        gearBoxChecks: ['Verify shimming', 'Check angle of engagement', 'Verify pick-up clearance', 'Verify air seal', 'Check trigger contacts'],
                        warrantyInfo: 'Covers labour and replacement parts installed.\n Warranty void if:\n gun is disassembled by user, water damage, excessive hop up is applied, poor quality bb are used.'
                    },
                    {
                        name: 'Basic Service - $38.67',
                        description: 'Necessary function repairs or installations; includes basic service inspection. ' +
                            'Components encountered will be checked for damage and excessive wear.',
                        tasks: ['Clean barrel', 'Split gear box if required', 'All batteries charged', 'Test FPS with 0.2g bb', 'Functional test', 'Replace parts are required',],
                        gearBoxChecks: [],
                        warrantyInfo: ''
                    },
                    {
                        name: 'RHop Installation',
                        description: '',
                        type: ['Barrel only - $19.97', 'Full installation - $34.95'],
                        conditions: ['For barrel RHop installation, only barrel should be provided upon drop off.', 'Complete gun should be dropped off for installation'],
                        rhopTasks: ['Removal and installation of barrel in rifle', 'Bucking modification', 'Hopup arm modification', 'Barrel RHop installation', 'Testing'],
                        gearBoxChecks: [],
                        warrantyInfo: ''
                    }
                ]
            }
        }
    }
</script>

<style scoped>

    .container {
        padding-top: 10px;
    }
</style>