<script setup lang="ts">
import { inject } from 'vue';
import { todoKey } from '../useTodo';

const TODOS = inject(todoKey)

</script>

<template>
  <div>
    <ul :style="{ listStyle: 'none' }">
      <li
        :style="{ backgroundColor: 'aliceblue', marginBottom: '10px' }"
        v-for="todo in TODOS"
      >{{ todos.title }}</li>
    </ul>
    <button @click="addTodo('add!')">Add</button>
  </div>
</template>

<style scoped>
</style>