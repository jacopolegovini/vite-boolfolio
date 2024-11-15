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
                    this.projectList = response.data.results;
                    console.log(this.projectList)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        deleteProject(index) {
            return this.projectList.splice(index, 1)
        },
        deleteProjectDB(index) {
            axios.delete(`http://127.0.0.1:8000/api/projects/${index}`)
                .then(response => {
                    console.log(`Deleted post with ID ${index}`);
                })
        },
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <main>
        <div class="card-list container d-flex">
            <div class="card" style="width: 18rem;" v-for="(project, index) in projectList" :key="project.id">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ project.description }}</p>
                    <button class="btn btn-primary" @click="deleteProject(index), deleteProjectDB(index)">Done</button>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.card-list {
    flex-wrap: wrap;
    gap: 20px;
}
</style>