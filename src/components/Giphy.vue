<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
defineProps(["currentGiphy"])
</script>

<template>
<div class="d-flex justify-center">
    <v-card max-width="600">
        <div class="ma-4">
            <v-card-title class="text-h6 text-md-h5 text-lg-h4">{{ currentGiphy.title }}</v-card-title>
            <v-card-text>
                Author: {{ currentGiphy.user?.username?.length > 1 ? currentGiphy.user.username : 'no author'}}
                <span v-if="currentGiphy.user?.username?.length > 1" @click="router.push(`/author/${currentGiphy.id}`)" class="mdi mdi-link icon"></span>
            </v-card-text>
            <div class="d-flex">
                <v-img class="bg-white" width="600" :aspect-ratio="1" :src="currentGiphy.images.original.url" cover></v-img>
            </div>
        </div>
    </v-card>
</div>
</template>



<style scoped>

</style>