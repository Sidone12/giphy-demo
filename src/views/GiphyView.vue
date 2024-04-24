<script lang="ts" setup>
import Giphy from "@/components/Giphy.vue";
import GiphyCarousel from '@/components/GiphyCarousel.vue'
import { useGiphsStore } from "../stores/giphs";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const giphsStore = useGiphsStore()

const currentGiphy = computed(() => giphsStore.giph);

const randomGiphys = computed(() => giphsStore.giphs);
</script>

<template>
<div>
    <div class="d-flex justify-center ma-10">
        <v-btn @click="router.push('/')">
            Go back
        </v-btn>
    </div>
    <Giphy v-if="giphsStore.giphs.length > 0" :currentGiphy="currentGiphy" />
    <GiphyCarousel :randomGiphys="randomGiphys" />
</div>
</template>

