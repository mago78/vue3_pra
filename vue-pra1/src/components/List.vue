<script setup lang="ts">
type Tweet = {
    id: number,
    description: string,
}
type Props = {
    tweets: Tweet[]
}

const deleteTweet = (id: number) => {
  console.log('delete')
}

defineProps<Props>()

const emit = defineEmits(['delete-tweet'])
const postTweet = (id: number) => {
    emit('delete-tweet', id)
}
</script>

<template>
    <div>
        <li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
            <span>{{ tweet }}</span>
            <button @click="deleteTweet(tweet.id)" class="delete-button">delete</button>
        </li>
    </div>
</template>

<style scoped>
.tweet-list {
  list-style: none;
  margin-bottom: 12px;
  border-radius: 4px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(210, 230, 248);
  padding: 8px 20px;
  width: 300px;
}

.delete-button{
  color: #fff;
  font-weight: bold;
  background-color: #c99a68;
  font-size: 12px;
  border-radius: 2px;
  border: none;
  width: 60px;
  height: 22px;
  padding: 3px 0;
}

.delete-button:hover{
  background-color: #ac783f;
}
</style>

