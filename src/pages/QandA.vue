<template>
    <Layout>
    <div class="container">
        <h1>Q & A</h1>

        <div :key="q.question" v-for="q in questionAnswerPairs" class="questionAnswerPair">
            <h2 align="left">{{q.question}}</h2>
            <p align="left">{{q.answer}}</p>
        </div>
    </div>
    </Layout>
</template>

<script>
    export default {
        name: "Q-and-A",
        data() {
            return {
                questionAnswerPairs: [
                    {
                        question: 'Which service option is correct for me?',
                        answer: 'We offer two service levels to allow our customers the flexibility of fulfilling their airsoft gun needs.  Customer:  “I want the most performance for my rifle, with no compromises taken”.  The Enhanced Service is perfect for this scenario, as we offer a comprehensive gun examination, and includes a 60 day warranty.  Customer: “My gun isn’t shooting anymore.  I’m just looking for some service to get it to shoot”.  The Basic Service is the ideal fit for this customer, as it offers a value service with necessary fixes to ensure that your gun is able to perform.  Additionally, the Basic Service is a great option for simple component changes like spring, motor, and barrel, and when a complete examination is not required.'
                    },
                    {
                        question: 'Why are your prices so expensive/inexpensive?',
                        answer: 'We offer cutting edge specialization in airsoft AEG services.  We pride ourselves in the integrity of knowing that we are not cutting any corners in any of our service levels. We provide the highest standards for functionality and authenticity, where all findings are documented and sent to the customer.  '
                    },
                    {
                        question: 'Why are your turn around times so short/long?',
                        answer: 'Being a small team has its advantages and disadvantages, and as a result, our turnaround times can vary.  We put a lot of emphasis on the quality and integrity of our work, and this can contribute to those turnaround times.  We try to accommodate our customers every need.'
                    },
                    {
                        question: 'What makes you qualified to work on airsoft guns?',
                        answer: 'Over the past several years, we have gained abundant experience in International competitive shooting, which helped to grow our knowledge of the precision required to tune a high functioning rifle.  We have numerous years’ experience in drone racing, which is a result of our educational and professional mechanical backgrounds.   Through the electrical knowledge and soldering experience that this provided us, as well as the LIPO high performance batteries we had the opportunity to work with, we were able to apply our expertise in the field of airsoft material exponentially.'
                    },
                    {
                        question: 'Our qualifications range from the following:',
                        answer: 'We service and specialize in AEG’s, providing RHop installation, gear box inspections, and current profiles.  We can also provide sealing solutions for Gas Blow Back Pistols, gas rifles, and gas grenades.'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    h1 {
        padding-top: 20px;
    }

    .questionAnswerPair {
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>