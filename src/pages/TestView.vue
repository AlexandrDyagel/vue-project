<script setup>
import { useWebAppHapticFeedback } from 'vue-tg'
import { useRouter } from 'vue-router'

const { impactOccurred, notificationOccurred, selectionChanged } = useWebAppHapticFeedback()

const router = useRouter()

function light() {
  impactOccurred('light')
}

function soft() {
  impactOccurred('soft')
}

function rigid() {
  impactOccurred('rigid')
}

function heavy() {
  impactOccurred('heavy')
}

function medium() {
  impactOccurred('medium')
}

function success() {
  notificationOccurred('success')
}

function warning() {
  notificationOccurred('warning')
}

function error() {
  notificationOccurred('error')
}
</script>
<template>
  <div class="fixed top-0 start-0 w-full h-full content-center">
    <div class="w-full p-5">
      <div class="flex items-center mb-2">
        <div class="relative w-full">
          <h1 class="text-center">impactOccurred</h1>
          <button
            type="button"
            class="fixed start-5 top-5 cursor-pointer text-white bg-[#287467] font-medium rounded-lg text-sm px-5 py-2.5"
            @click="router.back"
          >
             Назад
          </button>
          <button
            type="button"
            class="cursor-pointer w-full text-white bg-[#287467] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            @click="light"
          >
            Light
          </button>
          <button
            type="button"
            class="cursor-pointer w-full text-white bg-[#287467] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            @click="medium"
          >
            Medium
          </button>
          <button
            type="button"
            class="cursor-pointer w-full text-white bg-[#287467] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            @click="heavy"
          >
            Heavy
          </button>
          <button
            type="button"
            class="cursor-pointer w-full text-white bg-[#287467] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            @click="rigid"
          >
            Rigit
          </button>
          <button
            type="button"
            class="cursor-pointer w-full text-white bg-[#287467] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            @click="soft"
          >
            Soft
          </button>
          <br />
          <h1 class="text-center">notificationOccurred</h1>
          <button
            type="button"
            class="cursor-pointer w-full text-white bg-[#287467] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            @click="success"
          >
            Success
          </button>
          <button
            type="button"
            class="cursor-pointer w-full text-white bg-[#287467] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            @click="warning"
          >
            Warning
          </button>
          <button
            type="button"
            class="cursor-pointer w-full text-white bg-[#287467] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            @click="error"
          >
            Error
          </button>
          <br>
          <h1 class="text-center">selectionChanged</h1>
          <button
            type="button"
            class="cursor-pointer w-full text-white bg-[#287467] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            @click="() => selectionChanged()"
          >
            Error
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
div {
  background-color: #005c4b;
}

.border-color-custom {
  border-color: #013d32;
}
</style>
