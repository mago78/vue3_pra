<script setup lang="ts">
import { ref, computed } from 'vue'
import CardList from './components/CardList.vue';
import SecondCardList from './components/SecondCardList.vue';

const isFirstTab = ref(true)
const updateTab = (isFirst: boolean) => {
  isFirstTab.value = isFirst
}

const currentComp = computed(() => {
  switch (isFirstTab.value) {
    case true:
      return CardList
    case false:
      return SecondCardList
  }
})

</script>

<template>
  <div class="tab-changer">
    <button @click="updateTab(true)">Tab 1</button>
    <button @click="updateTab(false)">Tab 2</button>
  </div>
  <div class="tab-contents">
    <!-- <CardList></CardList> -->
    <!-- <CardList v-if="isFirstTab"></CardList>
    <SecondCardList v-if="!isFirstTab"></SecondCardList> -->
    <component :is="currentComp"></component>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.tab-contents {
  margin-top: 20px;

}
</style>
