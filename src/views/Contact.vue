<template>
    <div class="container">
        <h1>Contact Us</h1>

        <div align="left">
            <h3 >Booking an Appointment:</h3>

            <p>Upon appointment confirmation please bring the following items</p>

            <div>
                <ul>
                    <li v-for="condition in bookingConditions">{{condition}}</li>
                </ul>
            </div>

            <p>Upon arrival basic functional test will be performed, at which time a price and time estimate will be provided.</p>
            <p>The tech will contact the owner if and when replacement parts required for repairs or upgrades are advised.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About",
        data() {
            return {
                bookingConditions: ['Rifle in concealed case', 'Magazine - one of each kind, if various kinds are used', 'Battery - all batteries', 'Sample of bbs']
            }
        }
    }
</script>

<style scoped>

    h1 {
        padding-top: 20px;
    }
</style>