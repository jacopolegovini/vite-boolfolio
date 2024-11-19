<script>
import { RouterLink } from 'vue-router';
import { store } from '../../js/store.js'


export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container my-3 d-flex align-items-center justify-content-between">
        <nav class="d-flex align-items-center">
            <h1 class="">Project's Card</h1>
            <ul class="d-flex gap-4">
                <li>
                    <RouterLink :to="{ name: 'home' }">
                        Home
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'projects' }">
                        Projects
                    </RouterLink>
                </li>
            </ul>
        </nav>
        <input type="text" placeholder="Search" class="searchbar" v-model="store.searchedProject"
            @keyup.enter="store.searchProject(store.searchedProject)">
    </div>
</template>

<style scoped>
.searchbar {
    padding: 6px 30px;
    border: 1px solid lightgray;
    border-radius: 20px;
    margin-right: 50px;
}

ul {
    margin: 0;
    text-decoration: none;
    list-style-type: none;
    color: blue;
}
</style>