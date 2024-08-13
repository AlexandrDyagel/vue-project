<script setup>
/*import { onMounted } from 'vue'
import axios from 'axios'

const fetchData = async () => {
  const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
  const data = res.data
  for(let d in data) {
    console.log(data[d].name + ': ' + data[d].current_price)
  }
}

onMounted(fetchData)*/

const channels = [
  {
    id: 1,
    name: 'Neil Sims',
    email: 'neil.sims@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-1.jpg'
  },
  {
    id: 2,
    name: 'Bonnie Green',
    email: 'bonnie@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg'
  },
  {
    id: 3,
    name: 'Thomas Lean',
    email: 'thomes@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
  },
  {
    id: 4,
    name: 'Leslie Livingston',
    email: 'leslie@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg'
  },
  {
    id: 5,
    name: 'Jese Leos',
    email: 'jese@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg'
  },
  {
    id: 6,
    name: 'Neil Sims',
    email: 'neil.sims@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-1.jpg'
  },
  {
    id: 7,
    name: 'Bonnie Green',
    email: 'bonnie@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg'
  },
  {
    id: 8,
    name: 'Thomas Lean',
    email: 'thomes@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
  },
  {
    id: 9,
    name: 'Leslie Livingston',
    email: 'leslie@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg'
  },
  {
    id: 10,
    name: 'Jese Leos',
    email: 'jese@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg'
  },
  {
    id: 11,
    name: 'Neil Sims',
    email: 'neil.sims@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-1.jpg'
  },
  {
    id: 12,
    name: 'Bonnie Green',
    email: 'bonnie@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg'
  },
  {
    id: 13,
    name: 'Thomas Lean',
    email: 'thomes@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
  },
  {
    id: 14,
    name: 'Leslie Livingston',
    email: 'leslie@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg'
  },
  {
    id: 15,
    name: 'Jese Leos',
    email: 'jese@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg'
  },
  {
    id: 16,
    name: 'Neil Sims',
    email: 'neil.sims@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-1.jpg'
  },
  {
    id: 17,
    name: 'Bonnie Green',
    email: 'bonnie@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg'
  },
  {
    id: 18,
    name: 'Thomas Lean',
    email: 'thomes@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
  },
  {
    id: 19,
    name: 'Leslie Livingston',
    email: 'leslie@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg'
  },
  {
    id: 20,
    name: 'Jese Leos',
    email: 'jese@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg'
  },
  {
    id: 21,
    name: 'Neil Sims',
    email: 'neil.sims@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-1.jpg'
  },
  {
    id: 22,
    name: 'Bonnie Green',
    email: 'bonnie@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg'
  },
  {
    id: 23,
    name: 'Thomas Lean',
    email: 'thomes@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
  },
  {
    id: 24,
    name: 'Leslie Livingston',
    email: 'leslie@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg'
  },
  {
    id: 25,
    name: 'Jese Leos',
    email: 'jese@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg'
  },
  {
    id: 26,
    name: 'Neil Sims',
    email: 'neil.sims@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-1.jpg'
  },
  {
    id: 27,
    name: 'Bonnie Green',
    email: 'bonnie@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg'
  },
  {
    id: 28,
    name: 'Thomas Lean',
    email: 'thomes@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
  },
  {
    id: 29,
    name: 'Leslie Livingston',
    email: 'leslie@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg'
  },
  {
    id: 30,
    name: 'Jese Leos',
    email: 'jese@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg'
  },
  {
    id: 31,
    name: 'Neil Sims',
    email: 'neil.sims@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-1.jpg'
  },
  {
    id: 32,
    name: 'Bonnie Green',
    email: 'bonnie@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg'
  },
  {
    id: 33,
    name: 'Thomas Lean',
    email: 'thomes@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
  },
  {
    id: 34,
    name: 'Leslie Livingston',
    email: 'leslie@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg'
  },
  {
    id: 35,
    name: 'Jese Leos',
    email: 'jese@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg'
  },
  {
    id: 36,
    name: 'Neil Sims',
    email: 'neil.sims@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-1.jpg'
  },
  {
    id: 37,
    name: 'Bonnie Green',
    email: 'bonnie@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg'
  },
  {
    id: 38,
    name: 'Thomas Lean',
    email: 'thomes@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
  },
  {
    id: 39,
    name: 'Leslie Livingston',
    email: 'leslie@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg'
  },
  {
    id: 40,
    name: 'Jese Leos',
    email: 'jese@flowbite.com',
    img: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg'
  }
]

</script>

<template>
  <div class="relative overflow-x-auto overflow-y-auto shadow-md mb-16">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3 text-center" colspan="2">
          Биржа каналов
        </th>
      </tr>
      </thead>
      <tbody>
      <tr :key="channel.id" v-for="channel in channels" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row"
            class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
          <img class="w-10 h-10 rounded-full" :src="channel.img" alt="Jese image">
          <div class="ps-3">
            <div class="text-base font-semibold">{{ channel.name }}</div>
            <div class="font-normal text-gray-500">{{ channel.email }}</div>
          </div>
        </th>
        <td class="px-6 py-4">
          <!-- Modal toggle -->
          <button type="button" class="text-[10px] px-2 py-0 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Посмотреть</button>
<!--          <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal"
             class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Посмотреть</a>-->
        </td>
      </tr>
      </tbody>
    </table>

    <!-- Посмотреть modal -->
    <div id="editUserModal" tabindex="-1" aria-hidden="true"
         class="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <form class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Посмотреть
            </h3>
            <button type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="editUserModal">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                  Name</label>
                <input type="text" name="first-name" id="first-name"
                       class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Bonnie" required="">
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                  Name</label>
                <input type="text" name="last-name" id="last-name"
                       class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Green" required="">
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" name="email" id="email"
                       class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="example@company.com" required="">
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone
                  Number</label>
                <input type="number" name="phone-number" id="phone-number"
                       class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="e.g. +(12)3456 789" required="">
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label for="department"
                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                <input type="text" name="department" id="department"
                       class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Development" required="">
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label for="company"
                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                <input type="number" name="company" id="company"
                       class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="123456" required="">
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label for="current-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current
                  Password</label>
                <input type="password" name="current-password" id="current-password"
                       class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="••••••••" required="">
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label for="new-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New
                  Password</label>
                <input type="password" name="new-password" id="new-password"
                       class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="••••••••" required="">
              </div>
            </div>
          </div>
          <!-- Modal footer -->
          <div
            class="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
            <button type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Save all
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>