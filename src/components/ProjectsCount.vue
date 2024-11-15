<script setup>
import axios from 'axios';
import { ref, reactive, watch } from 'vue'

const number = ref(0)
const tweened = reactive({
    number: 0
})

watch(
    number,
    (n) => {
        gsap.to(tweened, { duration: 0.5, number: Number(n) || 0 })
    }
)
</script>
<!-- <script>
import axios from 'axios';

export default {
    name: 'AppMain',
    data() {
        return {
            projectList: [],
            apiUrl: 'http://127.0.0.1:8000/api/projects',
            number: projectList.length,
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiUrl)
                .then((response) => {
                    this.projectList = response.data.results;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    created() {
        this.getProject();
    }
}
</script> -->

<template>
    <div class="demo">
        Type a number: <input v-model.number="number" />

        <p class="big-number">{{ tweened.number.toFixed(0) }}</p>
    </div>
</template>

<style>
.big-number {
    font-weight: bold;
    font-size: 2em;
}
</style>
