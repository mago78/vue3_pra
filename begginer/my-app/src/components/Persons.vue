<script setup lang="ts">
import { Ref, ref } from 'vue'
import Post from './person/Post.vue';
import List from './person/List.vue';

export type Person = {
    id: number,
    name: string,
    age: number,
}

const persons: Ref<Person[]> = ref([{id: 0, name: 'John', age: 24}, {id: 1, name: 'sam', age: 33}])

const RegiPerson = (person: Person) => {
    persons.value.push(person)
}

const DeletePerson = (id: number) => {
    persons.value = persons.value.filter(p => p.id !== id)
}

</script>

<template>
    <div class="container">
        <h1>Persons</h1>
        <Post v-on:register="RegiPerson" />
        <div class="list-container">
            <ul>
                <List v-bind:persons="persons" v-on:delete="DeletePerson" />
            </ul>
        </div>
    </div>
</template>

<style scoped>

</style>
