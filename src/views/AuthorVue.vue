<script setup lang="ts">
import { useGiphsStore } from "../stores/giphs";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { Gif } from "@/api/types";

const route = useRoute();
const router = useRouter();

const giphsStore = useGiphsStore()
const currentUser = computed<Gif| undefined>(() => giphsStore.giphs.find(el => el.id === route.params.id));

</script>

<template>
    <v-card-title class="d-flex align-center pe-2 ga-6">
      <v-img max-height="60" max-width="200" src="/giphy.png"></v-img>
    </v-card-title>
    <div class="d-flex justify-center ">
        <v-card max-width="600" width="600">
            <v-card-text>
                <v-img class="my-5" height="75%" cover :src="`${currentUser.user.banner_image}`"></v-img>
                <v-avatar class="mb-5" size="80" :image="currentUser.user.avatar_url"></v-avatar>
                <div></div>
                <p class="text-h4 text--primary">
                    {{ currentUser.user.display_name }}
                </p>
                <p>Username: {{ currentUser.user.username }}</p>
                <div class="text--primary">
                    {{ currentUser.user.description }}
                </div>
                <div class="text--primary">
                    Profile: <a target="_blank" :href="`http://${currentUser.user.profile_url}`">{{ currentUser.user.profile_url
                    }}</a>
                </div>
                <p>instagram: <a target="_blank" :href="`http://${currentUser.user.instagram_url}`">{{ currentUser.user.instagram_url
                }}</a></p>

            </v-card-text>
            <v-card-actions>
                <v-btn @click="router.push(`/giphy/${currentUser.id}`)" variant="text" color="deep-purple-accent-4">
                    Go back
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>



<style scoped></style>