<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const inputDesc = ref<string>('')

const emit = defineEmits(['post-tweet'])
const PostTweet = () => {
    emit('post-tweet', inputDesc.value)
}
</script>

<template>
<div class="container">
    <input v-model="inputDesc" />
    <button class="save" v-on:click="PostTweet">追加</button>
</div>
</template>

<style scoped>

</style>
