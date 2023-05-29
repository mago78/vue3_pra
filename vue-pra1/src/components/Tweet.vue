<script setup lang="ts">
import { ref } from 'vue'
import PostForm from './PostForm.vue'
import List from './List.vue';

const tweets = ref([{ id: 0, description: 'Hello!'}, {id: 1, description: 'second'}])
const inputtingDescription = ref<string>('')

const postTweet = () => {
  const tweet = { id: Math.random(), description}
  tweets.value.push(tweet)
}

const deleteTweet = (id: number) => {
  tweets.value = tweets.value.filter(t => t.id !== id)
}


</script>

<template>
  <div class="container">
    <h1>Tweeter</h1>
    <div>
      <PostForm @post-tweet="postTweet"/>
      <!-- <input v-model="inputtingDescription" />
      <button class="save-button" @click="postTweet()">post</button> -->
    </div>
    <div class="tweet-container">
      <p v-if="tweets.length <= 0">No items</p>
      <ul>
        <List :tweets="tweets" @delete-tweet="deleteTweet" />
        <!-- <li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
          <span>{{ tweet }}</span>
          <button @click="deleteTweet(tweet.id)" class="delete-button">delete</button>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
}

</style>