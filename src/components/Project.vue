<script>
import axios from 'axios';

export default {
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/api/projects',
            projectList: [],
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiUrl)
                .then((response) => {
                    this.projectList = response.data.results;
                    console.log(response.data.results)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        getProjectId() {
            console.log('test1')
            console.log(parseInt(this.$route.params.id))
            return parseInt(this.$route.params.id)
        },
        getProjectById(projectList) {
            console.log('test2')
            console.log(projectList.find(element => element.id === this.getProjectId))
            return this.projectList.find(element => element.id === this.getProjectId)
        }


    },
    computed: {

    },

    created() {
        this.getProject()
    }
}
</script>

<template>
    <div>
        Project {{ $route.params.id }}
        <h2>{{ getProjectById(this.projectList).title }}</h2>
    </div>
</template>

<style scoped></style>