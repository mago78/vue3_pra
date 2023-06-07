<script setup lang="ts">
import { defineProps } from 'vue';

type Tweet = {
    id: number,
    description: string
}
type Props = {
    tweets: Tweet[]
}

defineProps<Props>()

const emit = defineEmits(['delete-tweet'])

const DeleteTweet = (id: number) => {
    console.log('delete')
    emit('delete-tweet', id)
}

</script>

<template>
    <div>
        <li v-for="tweet in tweets" v-bind:key="tweet.id">
            <span>{{ tweet.description }}</span>
            <button v-on:click="DeleteTweet(tweet.id)">delete</button>
        </li>
    </div>
</template>

<style scoped>

</style>
