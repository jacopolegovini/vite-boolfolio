<script>
import axios from 'axios';

export default {
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/api/projects',
            project: [],
        }
    },
    methods: {
        getProject() {
            axios.get(`${this.apiUrl}/${this.$route.params.id}`)
                .then((response) => {
                    this.project = response.data.results;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
    computed: {

    },

    mounted() {
        this.getProject()
    }
}
</script>

<template>
    <div>
        <h1>Project: {{ $route.params.id }}</h1>
        <h2>Title: {{ project.title }}</h2>
    </div>
</template>

<style scoped></style>