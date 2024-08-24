<template>
  <div>
    <h1 class="font-bold text-3xl my-2 text-center">Мой профиль</h1>
  </div>

  <!-- КАРТОЧКА ПРОФИЛЯ -->
  <div
    class="mx-4 w-auto border rounded-t-2xl shadow bg-gray-800 border-gray-700 mb-2">
    <div class="flex flex-col items-center py-5">
      <img class="w-24 h-24 mb-3 rounded-full shadow-lg"
           src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
      <h5 class="mb-1 text-xl font-medium text-white">Bonnie Green</h5>
      <span class="text-sm text-gray-400">Visual Designer</span>
      <div class="flex mt-4">
        <a href="#"
           class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Add
          friend</a>
        <a href="#"
           class="py-2 px-4 ms-2 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700">Message</a>
      </div>
    </div>
  </div>

  <!-- ПЛАШКИ -->
  <div class="mx-4 w-auto border shadow bg-gray-800 border-gray-700 mb-2">
    <table class="w-full text-sm text-center text-gray-400">
      <thead class="text-xs uppercase bg-gray-700 text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          Настройки
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
          Оплата
        </th>
      </tr>
      <tr class="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
          Промокоды
        </th>
      </tr>
      <tr class="bg-gray-800 hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
          Изменить язык
        </th>
      </tr>
      </tbody>
    </table>
  </div>

  <!-- ПЛАШКА УДАЛИТЬ АККАУНТ -->
  <div class="mx-4 w-auto border rounded-b-2xl shadow bg-gray-800 border-gray-700">
    <p class="px-6 py-4 text-xs text-center font-medium whitespace-nowrap text-red-800">
      Удалить аккаунт
    </p>
  </div>
</template>
<script setup lang="ts">
</script>