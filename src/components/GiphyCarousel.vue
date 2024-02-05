<script setup lang="ts">
const props = defineProps(["randomGiphys"]);
</script>

<template>
    <div class="d-flex ma-6 justify-center">
        <v-carousel class="w-75">
            <v-carousel-item v-for="item in randomGiphys" :src="item.images.fixed_width.url" cover></v-carousel-item>
        </v-carousel>
    </div>
</template>

