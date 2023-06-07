<script setup lang="ts">
import { ref } from 'vue'
import Post from './tweet/Post.vue'
import List from './tweet/List.vue'

const tweets = ref([{ id: 0, description: 'Hello'}, {id: 1, description: 'Vue3'}])

const PostTweet = (description: string) => {
    const tweet = { id: Math.random(), description}
    tweets.value.push(tweet)
}

const DeleteTweet = (id: number) => {
    tweets.value = tweets.value.filter(t => t.id !== id)
}

</script>

<template>
    <div class="container">
        <h1>Tweet</h1>
        <div>
            <Post v-on:post-tweet="PostTweet" />
        </div>
        <div class="tweet-container">
            <p v-if="tweets.length <= 0">No items</p>
            <ul>
                <List v-bind:tweets="tweets" v-on:delete-tweet="DeleteTweet" />
            </ul>
        </div>
    </div>
</template>

<style scoped>

</style>
