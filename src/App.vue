<script setup>

import BottomMenu from '@/components/BottomMenu.vue'
import Drawer from '@/components/Drawer.vue'
import { provide, ref } from 'vue'


const tg = window.Telegram.WebApp;
tg.expand()

const showDrawer = ref(false)
const openDrawer = () => {
  showDrawer.value = true
}
const closeDrawer = () => {
  showDrawer.value = false
}

provide('drawerActions', { openDrawer, closeDrawer })

</script>

<template>
  <header>

  </header>
    <Drawer v-if="showDrawer"/>
  <main>
    <router-view></router-view>
  </main>

  <BottomMenu />

</template>
