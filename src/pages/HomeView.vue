<script setup>
import { onMounted } from 'vue'
import axios from 'axios'

const fetchData = async () => {
  const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
  const data = res.data
  for(let d in data) {
    console.log(data[d].name + ': ' + data[d].current_price)
  }
}

onMounted(fetchData)
</script>

<template>
  <h1 class="font-bold text-3xl">Биржа</h1>
</template>