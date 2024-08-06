<script setup>

import BottomMenu from '@/components/BottomMenu.vue'

const tg = window.Telegram.WebApp;
tg.expand()

</script>

<template>
  <header>

  </header>

  <main>
    <router-view></router-view>
  </main>

  <BottomMenu />

</template>
