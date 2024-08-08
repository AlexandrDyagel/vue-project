<script setup>
/*import { onMounted } from 'vue'
import axios from 'axios'

const fetchData = async () => {
  const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
  const data = res.data
  for(let d in data) {
    console.log(data[d].name + ': ' + data[d].current_price)
  }
}

onMounted(fetchData)*/
import { inject } from 'vue'

const { openDrawer } = inject('drawerActions')
</script>

<template>
  <h1 class="font-bold text-3xl">Биржа</h1>
  <button @click="openDrawer" class="fixed border border-amber-700 rounded-3xl top-0 right-0 w-1/4 py-4 m-2 z-10">Ткни в меня</button>
</template>