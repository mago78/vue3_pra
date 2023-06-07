<script setup lang="ts">
// import TodoList from './components/TodoList.vue';
import { provide } from 'vue';
// import { TODOS, todoKey } from './useTodo'
import NewTodo from './components/NewTodo.vue';

</script>

<template>
  <!-- <TodoList /> -->
  <NewTodo />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
