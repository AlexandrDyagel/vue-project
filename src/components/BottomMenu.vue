<script setup>
import MenuItem from './BottomMenuItem.vue';
</script>

<template>
  <div class="fixed bottom-0 w-full bg-black">
    <ul class="flex justify-around">
      <li class="w-1/4">
        <MenuItem image-url="src/assets/home-24dp.svg" title="Биржа"/>
      </li>
      <li class="w-1/4">
        <MenuItem  image-url="src/assets/add_circle_24dp.svg" title="Добавить" />
      </li>
      <li class="w-1/4">
        <MenuItem  image-url="src/assets/cached_24dp.svg" title="История" />
      </li>
      <li class="w-1/4">
        <MenuItem  image-url="src/assets/person_24dp.svg" title="Профиль" />
      </li>
    </ul>
  </div>
</template>