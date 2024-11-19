<script>
import axios from 'axios';
import { store } from '../../js/store.js'

export default {
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/api/projects',
            project: [],
            store,
        }
    },
    methods: {
        // Messo una store, non più necessaria
        // getProject() {
        //     axios.get(`${this.apiUrl}/${this.$route.params.id}`)
        //         .then((response) => {
        //             this.project = response.data.results;
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });
        // },
    },
    computed: {

    },

    mounted() {
        // Messo una store, non più necessaria
        // this.getProject()
    }
}
</script>

<template>
    <div class="container">
        <h1>Project: {{ $route.params.id }}</h1>
        <h2>Title: {{ store.project.title }}</h2>
    </div>
</template>

<style scoped></style>