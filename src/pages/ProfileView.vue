<template>
  <div class="mb-16">
    <div>
      <h1 class="font-bold text-3xl my-2 text-center">Мой профиль</h1>
    </div>

    <!-- КАРТОЧКА ПРОФИЛЯ -->
    <div
      class="mx-4 w-auto bg-white border border-gray-200 rounded-t-2xl shadow dark:bg-gray-800 dark:border-gray-700 mb-2">
      <div class="flex flex-col items-center py-5">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg"
             src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div class="flex mt-4">
          <a href="#"
             class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
            friend</a>
          <a href="#"
             class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
        </div>
      </div>
    </div>

    <!-- ПЛАШКИ -->
    <div class="mx-4 w-auto bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 mb-2">
      <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Настройки
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Оплата
          </th>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Промокоды
          </th>
        </tr>
        <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Изменить язык
          </th>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- ПЛАШКА УДАЛИТЬ АККАУНТ -->
    <div class="mx-4 w-auto bg-white border border-gray-200 rounded-b-2xl shadow dark:bg-gray-800 dark:border-gray-700">
      <p class="px-6 py-4 text-xs text-center font-medium text-gray-900 whitespace-nowrap dark:text-red-800">
        Удалить аккаунт
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>