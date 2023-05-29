<script setup lang="ts">
    import { ref, reactive, computed, toRefs, watch } from 'vue'

    const item1 = ref<string>('sauna')
    const price1 = 800
    const item2 = 'karaoke'
    const price2 = 2200
    const message = ''
    const url1 = 'https://www.amazon.co.jp/dp/B090QMBH5R7'
    const budget = 50000

    const thing1 = reactive({
        name: 'meshi',
        price: 1200
    })

    const input = (event: any) => {
        console.log('event.target.value: ', event.target.value)
        // item1.value = event.target.value
        thing1.name = event.target.value
    }

    const clear = () => {
        thing1.name = ''
        thing1.price = 0
    }

    const buy = (item: string) => {
        alert('Really?'+ item + '?')
    }

    // computed
    // const priceCompare = computed(() => {
    //     if(thing1.price > budget){
    //         return '高すぎー！'
    //     } else {
    //         return thing1.price
    //     }
    // })

    const priceCompare = ref<string>(thing1.price + 'yen')
    const { price } = toRefs(thing1)
    watch(price, () => {
        if(price.value > budget){
            priceCompare.value = '高すぎー！'
        } else {
            priceCompare.value = price.value + 'yen'
        }
    })
</script>

<template>
    <div class="container">
        <h1>最近の支出</h1>
        <input v-model="thing1.price" />
        <input v-on:input="input" v-bind:value="thing1.name"/>
        <button v-on:click="clear">Clear</button>
        <div class="payment">
            <label>{{ item1 }}</label>
            <label>{{ price1 }}</label>
            <button v-on:click="buy(item1)">Buy</button>
            <a v-bind:href="url1">url</a>
        </div>
        <div class="payment">
            <label>{{ thing1.name }}</label>
            <label>{{ priceCompare }}</label>
        </div>
        <p>{{ message }}</p>
    </div>

</template>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.payment{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 500px;
    background-color: aqua;
    margin-bottom: 10px;
}

label{
    font-size: 20px;
    font-weight: bold;
}
</style>