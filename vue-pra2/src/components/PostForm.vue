<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref } from 'vue'
const inputtingName = ref<string>('')
const inputtingAge = ref<number>(0)

const emit = defineEmits(['register'])

const register = () => {
    const person = { id: Math.random(), name: inputtingName.value, age: inputtingAge.value}
    emit('register', person)
}

const nameLimit = 15
const nameValid = computed(() => {
    if(inputtingName.value.length >= nameLimit) {
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
    <div class="form-cont">
        <div class="input-cont">
            <div class="inline">
                <span class="itemName">name:</span>
                <input class="input-name" v-model="inputtingName" />
            </div>
            <span class="errormess" v-if="!nameValid">{{ nameLimit }}文字が限界だよーw</span>
            <div class="inline">
                <span class="itemName">age:</span>
                <input class="input" v-model="inputtingAge" type="number" />
            </div>
        </div>
        <button :disabled="!nameValid" @click="register" class="register">regi</button>
    </div>
</template>

<style scoped>
.form-cont {
    flex-direction: column;
    align-items: center;
    background-color: rgb(255, 241, 226);
    padding: 24px 0;
    width: 80%;
    margin-bottom: 12px;
    border-radius: 4px;
}

.input-cont {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 5% auto;
    width: 70%;
    height: 50px;
    margin-bottom: 20px;
}

.span {
    font-size: 20px;
    font-weight: bold;
}

.itemName {
    width: 20%;
}

.input {
    width: 80%;
}

.input-name {
    width: 80%;
    background-color: v-bind(color);
}

.inline {
    display: flex;
}

.errormess {
    font-size: 12px;
    font-weight: bold;
}
</style>