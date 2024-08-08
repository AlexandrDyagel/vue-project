<script setup>

import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const navItems = ref([
  {
    name: 'Биржа',
    routeName: 'home',
    route: '/',
    active: true
  },
  {
    name: 'Добавить',
    routeName: 'add',
    route: '/add',
    active: false
  },
  {
    name: 'История',
    routeName: 'history',
    route: '/history',
    active: false
  },
  {
    name: 'Профиль',
    routeName: 'profile',
    route: '/profile',
    active: false
  }
])

const route = useRoute()

watch(route, () => {
  navItems.value.forEach(item => {
    item.active = item.routeName === route.name
  })
})

</script>

<template>
  <div class="fixed bottom-0 w-full">
    <ul
      class="text-xs font-medium text-center text-gray-500 shadow flex dark:divide-gray-700 dark:text-gray-400 border border-gray-700">
      <RouterLink :key="navItem.route" v-for="navItem in navItems"
                  class="w-full transition duration-500 py-2 border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-gray-700"
                  :class="navItem.active ? `text-gray-700 bg-gray-50 dark:text-white dark:bg-gray-700` : `dark:bg-gray-800`"
                  :to="navItem.route">
        <li class="w-full focus-within:z-10 flex flex-col items-center justify-center">
          <svg v-if="navItem.routeName === 'home'" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <svg v-if="navItem.routeName === 'add'" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <svg v-if="navItem.routeName === 'history'" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
          </svg>
          <svg v-if="navItem.routeName === 'profile'" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          <p>{{ navItem.name }}</p>
        </li>
      </RouterLink>
    </ul>
  </div>
</template>