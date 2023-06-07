<script setup lang="ts">
import { Person } from '../Persons.vue'

type Props = {
    persons: Person[]
}
defineProps<Props>()

const emit = defineEmits(['delete'])
const ClickDelete = (id: number) => {
    if(confirm('Delete')) {
        emit('delete', id)
    }
}

</script>

<template>
    <li v-for="person in persons" v-bind:key="person.id">
        <span>{{ person.name }}</span>
        <span>age: {{ person.age }}</span>
        <button v-on:click="ClickDelete(person.id)"><span>削除</span></button>
    </li>
</template>

<style scoped>

</style>
