<script setup lang="ts">
import { ref } from 'vue'
defineProps({
    msg: String,
})

const count = ref(0)
</script>

<template>
    <h1>{{ msg }}</h1>
    <div>
        <button type="button" v-on:click="count++">{{ count }}</button>
        <p>Edit
            <code>components/Message.vue</code> to test HMR
        </p>
    </div>
    <p>Check Out
        <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">
            create-vue
        </a>
        , the official vue
    </p>
    <p>Install
        <a href="https://github.com/vuejs/language-tools" target="_blank">
            Volar
        </a>
        in your IDE for a better DX
    </p>
    <p>Click on the Vite and Vue</p>
</template>

<style scoped>

</style>
