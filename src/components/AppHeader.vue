<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <h1 class="my-3">Project's Card</h1>
    <nav>
        <ul>
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
</template>

<style scoped></style>