<script setup>

defineProps({
  imageUrl: String,
  title: String,
  route: String
})

</script>

<template>
  <RouterLink :to="route">
    <div class="text-white m-4 p-4 h-3/4 w-auto border border-amber-500 cursor-pointer transition hover:scale-105 hover:border-amber-700 rounded-3xl grid grid-flow-row place-items-center gap-1.5">
      <img :src="imageUrl" :alt="title" />
      <p>{{ title }}</p>
    </div>
  </RouterLink>
</template>