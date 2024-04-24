<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useGiphsStore } from "../stores/giphs";

const giphsStore = useGiphsStore()
// 0USEVbSrL2Nt3EugGolYgskoKr1Nb1CS
const keyword = ref < string > ('')
let timeout: number | null = null;

onMounted(giphsStore.fetchRandomGiphs);

const onInput = () => {
    if (timeout !== null) {
        clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
        giphsStore.searchNewGiphs(keyword.value)
    }, 1000);
}
</script>


<template>
<v-text-field class="my-5" variant="outlined" hide-details single-line append-inner-icon="mdi-magnify" label="Search... " v-model="keyword" @input="onInput" />
</template>



<style lang="scss" scoped>

</style>