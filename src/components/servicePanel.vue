<template>
    <div>
        <b-card bg-variant="light" class="card" style="text-align: left" :title="service.name">

            <p class="card-text">
                {{service.description}}
            </p>

            <h6 v-if="service.name.includes('Service')"><strong>Tasks Performed:</strong></h6>

            <ul>
                <li v-for="i in service.tasks">
                    {{i}}

                    <ul v-if= "i === 'Gear box'">
                        <li v-for="gtask in service.gearBoxChecks">{{gtask}}</li>
                    </ul>
                </li>
            </ul>

            <div class="warranty" v-if="service.warrantyInfo !== ''">
                <a v-b-popover.hover=service.warrantyInfo title="Warrenty Info">
                    60 Day Warranty
                </a>
            </div>

            <ul>
                <li v-for="(x, index) in service.type">
                    {{x}}

                    <ul>
                        <li>{{service.conditions[index]}}</li>
                    </ul>

                    <ul  v-if="x.includes('Full')">
                        <li v-for="t in service.rhopTasks">{{t}}</li>
                    </ul>
                </li>
            </ul>

            <b-button to="BookAppt">Book Now</b-button>

        </b-card>
    </div>
</template>

<script>
    export default {
        name: "servicePanel",
        props: ['service'],
        data () {
            return {

            }
        }
    }
</script>

<style scoped>

    .card-text {
        text-align: left;
    }

    .card {
        margin-top: 20px;
    }

    a.btn.btn-secondary {
        margin-top: 5px;
    }

</style>