<script setup>

defineProps({
  imageUrl: String,
  title: String,
  route: String
})

</script>

<template>
  <RouterLink :to="route">
    <div class="text-white m-2 p-3 w-auto border border-amber-500
    flex flex-col items-center justify-center cursor-pointer
     transition hover:scale-105 hover:border-amber-700 rounded-xl gap-1.5">
      <img :src="imageUrl" :alt="title" />
      <p>{{ title }}</p>
    </div>
  </RouterLink>
</template>