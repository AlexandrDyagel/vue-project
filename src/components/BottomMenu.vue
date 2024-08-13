<script setup>

import { ref, shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import  Svg  from '@/components/Svg.vue'
import HomeIcon from '@/components/icons/HomeIcon.vue'
import AddIcon from '@/components/icons/AddIcon.vue'
import HistoryIcon from '@/components/icons/HistoryIcon.vue'
import ProfileIcon from '@/components/icons/ProfileIcon.vue'

const navItems = ref([
  {
    name: 'Биржа',
    routeName: 'home',
    route: '/',
    active: true,
    icon: shallowRef(HomeIcon)
  },
  {
    name: 'Добавить',
    routeName: 'add',
    route: '/add',
    active: false,
    icon: shallowRef(AddIcon)
  },
  {
    name: 'История',
    routeName: 'history',
    route: '/history',
    active: false,
    icon: shallowRef(HistoryIcon)
  },
  {
    name: 'Профиль',
    routeName: 'profile',
    route: '/profile',
    active: false,
    icon: shallowRef(ProfileIcon)
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
          <Svg>
            <component ref="comp" :is="navItem.icon"></component>
          </Svg>
          <p>{{ navItem.name }}</p>
        </li>
      </RouterLink>
    </ul>
  </div>
</template>