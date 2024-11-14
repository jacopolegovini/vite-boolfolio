<script>
import axios from 'axios';

export default {
    name: 'AppMain',
    data() {
        return {
            projectList: [],
            apiUrl: 'http://127.0.0.1:8000/api/projects'
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiUrl)
                .then((response) => {
                    this.projectListList = response.data.results;
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
</script>

<template>
    <main>
        <p>test</p>
    </main>
</template>

<style scoped></style>