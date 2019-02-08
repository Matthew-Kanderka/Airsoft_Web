<template>
    <div>
        <b-card bg-variant="light" class="card" style="text-align: left" :title="service">

            <p class="card-text">
                {{description}}
            </p>

            <h6 v-if="service.includes('Service')"><strong>Tasks Performed:</strong></h6>

            <ul>
                <li v-for="i in tasks">
                    {{i}}

                    <ul v-if= "i === 'Gear box'">
                        <li v-for="gtask in gearBoxTasks">{{gtask}}</li>
                    </ul>
                </li>
            </ul>

            <ul>
                <li v-for="(x, index) in type">
                    {{x}}

                    <ul>
                        <li>{{conditions[index]}}</li>
                    </ul>

                    <ul  v-if="x.includes('Full')">
                        <li v-for="t in rhopTasks">{{t}}</li>
                    </ul>
                </li>
            </ul>

        </b-card>
    </div>
</template>

<script>
    export default {
        name: "servicePanel",
        props: ['service', 'description', 'tasks', 'gearBoxTasks', 'type', 'conditions', 'rhopTasks'],
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

</style>