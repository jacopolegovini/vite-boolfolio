<script>
import axios from 'axios';

export default {
    name: 'AppMain',
    data() {
        return {
            projectList: [],
            apiUrl: 'http://127.0.0.1:8000/api/projects',
            loaded: false
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiUrl)
                .then((response) => {
                    this.projectList = response.data.results;
                    this.loaded = true
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
        <!-- Loader -->


        <!-- Projects -->
        <div class="card-list container d-flex">
            <div class="loader container" v-if="!loaded"></div>
            <div class="card" style="width: 18rem;" v-for="(project, index) in projectList" :key="project.id">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ project.description }}</p>
                    <button class="btn btn-primary" @click="deleteProject(index), deleteProjectDB(index)">Done</button>
                    <button class="btn btn-warning">Show</button>
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

.loading {
    height: 100%;
    width: 100%;
}

/* HTML: <div class="loader"></div> */
.loader {
    width: 16px;
    aspect-ratio: 1;
    background: #3FB8AF;
    position: relative;
    animation: l8-0 2.5s infinite linear alternate;
}

.loader:before {
    content: "";
    position: absolute;
    inset: 0;
    background: #FF3D7F;
    transform: translate(100%);
    transform-origin: top left;
    animation: l8-1 .5s infinite alternate;
}

@keyframes l8-0 {

    0%,
    19.9%,
    80%,
    100% {
        transform: scale(1, 1)
    }

    20%,
    39.9% {
        transform: scale(-1, 1)
    }

    40%,
    59.9% {
        transform: scale(-1, -1)
    }

    60%,
    79.9% {
        transform: scale(1, -1)
    }
}

@keyframes l8-1 {

    0%,
    20% {
        transform: translate(100%) rotate(0)
    }

    80%,
    100% {
        transform: translate(100%) rotate(-180deg)
    }
}
</style>