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
    <div class="container my-3 d-flex align-items-center">
        <h1 class="">Project's Card</h1>
        <nav>
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
    </div>
</template>

<style scoped></style>