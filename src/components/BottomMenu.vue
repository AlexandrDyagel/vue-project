<script setup>
import MenuItem from './BottomMenuItem.vue';
</script>

<template>
  <div class="fixed bottom-0 w-full bg-black">
    <ul class="flex justify-evenly">
      <li class="w-1/4 h-1/4">
        <MenuItem image-url="/home-24dp.svg" title="Биржа" route="/"/>
      </li>
      <li class="w-1/4 h-1/4">
        <MenuItem  image-url="/add_circle_24dp.svg" title="Добавить" route="/add" />
      </li>
      <li class="w-1/4 h-1/4">
        <MenuItem  image-url="/cached_24dp.svg" title="История" route="/history" />
      </li>
      <li class="w-1/4 h-1/4">
        <MenuItem  image-url="/person_24dp.svg" title="Профиль" route="/user" />
      </li>
    </ul>
  </div>

</template>