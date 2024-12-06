<script setup>
import { computed, ref } from 'vue'
import { useWebAppHapticFeedback, useWebAppNavigation, useWebAppQrScanner, useWebAppTheme } from 'vue-tg'
import { useRouter } from 'vue-router'
import { jsPDF } from 'jspdf'

const createPDF = () => {
  const doc = new jsPDF();
  const cellSize = 20; // Размер ячейки
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Буквы для заполнения

  for (let i = 0; i < letters.length; i++) {
    const x = (i % 10) * cellSize; // Позиция по X
    const y = Math.floor(i / 10) * cellSize; // Позиция по Y
    doc.rect(x, y, cellSize, cellSize); // Рисуем квадрат
    doc.text(letters[i], x + 5, y + 15); // Добавляем букву
  }

  doc.save("cells.pdf"); // Сохранение PDF
}

const router = useRouter()

const phoneNumber = ref()

const { setHeaderColor } = useWebAppTheme()
setHeaderColor("#005c4b")
const { openLink } = useWebAppNavigation()
const { showScanQrPopup } = useWebAppQrScanner()
const { impactOccurred, notificationOccurred } = useWebAppHapticFeedback()

function formattedString(e) {
  phoneNumber.value = e.target.value.replace(/\D/g, '')
  console.log(phoneNumber.value)

}

const link = computed(() => {
  return `https://api.whatsapp.com/send/?phone=${phoneNumber.value}&type=phone_number`
})

function scanQrCode() {
  impactOccurred('rigid')
  notificationOccurred('success')
  showScanQrPopup('whatsapp', (data) => {
    openLink(`https://api.whatsapp.com/send/?phone=${data}&type=phone_number`)
    return true
  })
}

function openWhatsappChat() {
  impactOccurred('heavy')
  notificationOccurred('success')
  openLink(link.value)
}
</script>
<template>
  <div class="fixed top-0 start-0 w-full h-full content-center">
    <div class="w-full p-5">
      <div class="flex items-center mb-2">
        <div class="relative w-full">
          <input
            @input="formattedString"
            :value="phoneNumber"
            type="tel"
            class="border-color-custom rounded-s-lg bg-[#18695A] border text-sm block w-full p-2.5 focus:outline-none"
            placeholder="Введите номер телефона"
          />
        </div>
        <button
          class="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-[#287467] rounded-e-lg border border-color-custom"
          type="button"
        >
          <span id="default-icon">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path
                d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"
              />
            </svg>
          </span>
          <span id="success-icon" class="hidden inline-flex items-center">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
        </button>
        <div
          id="tooltip-website-url"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          <span id="default-tooltip-message">Copy link</span>
          <span id="success-tooltip-message" class="hidden">Copied!</span>
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
      <button
        type="button"
        class="cursor-pointer w-full text-white bg-[#287467] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        @click="openWhatsappChat"
      >
        Открыть в Whatsapp
      </button>
      <!--      <button
              type="button"
              class="cursor-pointer w-full text-white bg-[#287467] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              @click="router.push('/test')"
            >
              Примеры тактильных откликов
            </button>-->
      <div class="fixed bottom-0 mb-2 me-5">
      <button
        type="button"
        class="w-full bottom-5 start-5 end-5 cursor-pointer  text-white bg-[#287467] font-medium rounded-lg text-sm mb-2 px-5 py-2.5"
        @click="scanQrCode"
      >
        Сканировать QR
      </button>
        <button
        type="button"
        class="w-full bottom-5 start-5 end-5 cursor-pointer  text-white bg-[#287467] font-medium rounded-lg text-sm mb-2 px-5 py-2.5"
        @click="createPDF"
      >
        Создать PDF
      </button>

        <button
          type="button"
          class="cursor-pointer w-full text-white bg-[#287467] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          @click="router.push('/electric')"
        >
          Билеты - Электробезопасность
        </button>

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
