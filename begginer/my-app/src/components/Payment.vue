<script setup lang="ts">
import { ref, reactive, computed, toRefs, watch } from 'vue'

const item1 = ref<string>('sauna')
const price1 = 800
const message = ''
const url1 = 'https://www.amazon.co.jp/dp/B090QMBH5R7'
const budget = 50000

const thing1 = reactive({
    name: 'meshi',
    price: 1200
})

const thing2 = reactive({
    name: 'earcaf',
    price: 1000
})

const InputItem = (event: any) => {
    thing1.name = event.target.value
}

const ClearItem = () => {
    thing1.name = ""
    thing1.price = 0
}

const priceWatch = ref<string>(thing1.price + 'yen')
const { price } = toRefs(thing1)
watch(price, () => {
    if(price.value > budget){
        priceWatch.value = '高すぎー'
    } else {
        priceWatch.value = price.value + 'yen'
    }
})

computed
const priceComputed = computed(() =>{
    if(thing2.price > budget){
        return '高いよ'
    } else {
        return thing2.price
    }
})

const BuyItem = (item: string) => {
    alert('Really?' + item + '?')
}

</script>

<template>
    <div class="container">
        <div class="item-input">
            <h1>最近の支出</h1>
            <input v-on:input="InputItem" v-bind:value="thing1.name"/>
            <input v-model="thing1.price"/>
            <button v-on:click="ClearItem()">削除</button>
        </div>

        <div class="item-display">
            <h1>購入履歴</h1>
            <div class="item">
                <label>{{ item1 }}</label>
                <label>{{ price1 }}</label>
            </div>
            <div class="item">
                <label>{{ thing1.name }}</label>
                <!-- <label>{{ thing1.price }}</label> -->
                <label>{{ priceWatch }}</label>
            </div>
            <div class="item">
                <h1>おすすめ商品</h1>
                <label>{{ thing2.name }}</label>
                <!-- <label>{{ thing2.price }}</label> -->
                <label>{{ priceComputed }}</label>
                <button v-on:click="BuyItem(thing1.name)">購入</button>
                <!-- <a v-bind:href="url1">url</a> -->
                <a href='https://www.amazon.co.jp/dp/B090QMBH5R7'>url</a>
            </div>
        </div>
        <p>{{ message }}</p>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.item-input{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
}
.item{
    padding-bottom: 15px;
}
button{
    font-size: 10px;
}

</style>