
<script setup lang="ts">
import { onMounted, computed, onUnmounted } from 'vue'
import { useGiphsStore } from "../stores/giphs";

import type { Gif } from '@/api/types'

const giphsStore = useGiphsStore()


onMounted(giphsStore.fetchRandomGiphs);

const array = computed<Gif[]>(() => {
  return giphsStore.giphs;
});

const copyUrl = async (item: Gif) => {
  let shareData = {
    title: item.title,
    url: item.images.fixed_width.url
  }
  try {
    await navigator.share(shareData);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

const handleScroll = () => {
  if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight) {
    console.log('Reached the end of the page!');
    giphsStore.addMoreOnScroll()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});


</script>

<template>
  <v-row v-if="array.length > 0" class="mt-5">

    <v-col v-for="item in array" cols="6" md="4" class="d-flex child-flex">
      <router-link class="link"  :to="`/giphy/${item.id}`">
     
      <div>
        <v-img width="300" height="300" :src="item.images.fixed_width.url" cover></v-img>
        <span @click="copyUrl(item)" class="mdi mdi-link icon"></span>
      </div>
    </router-link>
    </v-col>
  </v-row>
  <Transition name="slide-fade">
    <h1 v-if="giphsStore.giphs.length < 1">Not Found.</h1>
  </Transition>
</template>


<style scoped>
.link{
  flex: 1 0 auto;
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    object-fit: cover;
}

.icon {
  position: absolute;
  top: 10px;
  right: 20px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
