<script setup lang="ts">
import { ref, computed } from 'vue'

const inputName = ref<string>('')
const inputAge = ref<number>(0)

const emit = defineEmits(['register'])
const register = () => {
    const person = { id: Math.random(), name: inputName.value, age: inputAge.value }
    emit('register', person)
}

const nameLimit = 10
const nameValid = computed(() => {
    if(inputName.value.length >= nameLimit) {
        return false
    } else {
        return true
    }
})

const color = computed(() => {
    return nameValid.value ? 'white' : 'rgb(244, 194, 190)'
})

</script>

<template>
    <div class="form-container">
        <div class="input-container">
            <div class="inline">
                <span class="item-name">name:</span>
                <input class="input-name" v-model="inputName" />
            </div>
            <span class="error-mess" v-if="!nameValid">{{ nameLimit }}文字以下にしてください</span>
            <div class="inline">
                <span class="item-name">age:</span>
                <input class="input-age" v-model="inputAge" type="number" />
            </div>
        </div>
        <button v-bind:disabled="!nameValid" v-on:click="register">regi</button>
    </div>
</template>

<style scoped>
.input-name {
    background-color: v-bind(color);
}
</style>
