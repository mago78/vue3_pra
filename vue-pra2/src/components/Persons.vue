<script setup lang="ts">
import { ref, Ref } from 'vue'
import ListForm from './ListForm.vue';
import PostForm from './PostForm.vue';

export type Person = {
    id: number,
    name: string,
    age: number,
}

const persons: Ref<Person[]> = ref([{id: 0, name: 'John', age: 24}, {id: 1, name: 'sam', age: 33}])

const regiPerson = (person: Person) => {
    persons.value.push(person)
}

const deletePerson = (id: number) => {
    persons.value = persons.value.filter(p => p.id !== id)
}
</script>

<template>
    <div class="container">
        <h1>Title</h1>
        <PostForm @register="regiPerson" />
        <div class="list-container">
            <ul>
                <ListForm :persons="persons" @delete="deletePerson" />
            </ul>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>