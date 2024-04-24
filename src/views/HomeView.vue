<script setup lang="ts">
import AutoCompleteInput from '../components/AutoCompleteInput.vue'
import GiphsListings from '../components/GiphsListings.vue'
</script>

<template>
<v-main style="max-width: 1000px;" class="ma-auto">
    <v-card-title class="d-flex align-center pe-2 ga-6">
        <v-img max-height="60" max-width="200" src="/giphy-demo/giphy.png"></v-img>
        <AutoCompleteInput />
    </v-card-title>
    <v-divider></v-divider>
    <GiphsListings />
</v-main>
</template>


