<script setup lang="ts">
    import { ref } from 'vue'

    const todos = ref(['study', 'cock'])

    const task = ref('')

    const AddTask = (task: string) => {
        todos.value.push(task)
        console.log(task)
        task = ''
    }

    const DeleteTask = (index: number) => {
        todos.value.splice( index, 1 )
    }

</script>

<template>
    <h1>TODO LIST</h1>
    <form v-on:submit.prevent>
        <input type="text" v-model="task">
        <button v-on:click="AddTask(task)">Add</button>
    </form>
    <p>{{ task }}</p>
    <ul>
        <li v-for="(todo, index) in todos">
            <span>{{ todo }}</span>
            <button v-on:click="DeleteTask(index)">削除</button>
        </li>
    </ul>
</template>

<style scoped>

</style>