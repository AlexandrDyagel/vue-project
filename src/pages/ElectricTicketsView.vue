<script setup>
import { questions } from '@/constant.js'
import { onMounted, ref, watchEffect } from 'vue'
import { BackButton, SettingsButton, useWebAppCloudStorage } from 'vue-tg'
import { useRouter } from 'vue-router'
import { useWebAppViewport } from 'vue-tg'

const viewport = useWebAppViewport()
viewport.disableVerticalSwipes

/*let scrollable = document.querySelector('.scrollable');

scrollable.addEventListener('wheel', (event) => {
  if (scrollable.scrollTop === 0 && event.deltaY < 0) {
    event.preventDefault();
  }
});*/


const query = ref('')
let filteredQuestions = ref([])
let timeout = null

const storage = useWebAppCloudStorage()

const defaultQuestionFontSize = 'text-sm'
const defaultAnswerFontSize = 'text-xs'

const questionFontSize = ref('')
const answerFontSize = ref('')

onMounted(async () => {
   await storage.getStorageItem('question-font-size')
     .then(result => {
       if (result !== null){
         questionFontSize.value = result
       } else {
         storage.setStorageItem('question-font-size', defaultQuestionFontSize)
         questionFontSize.value = defaultQuestionFontSize
       }
     });

   await storage.getStorageItem('answer-font-size')
     .then(result => {
       if (result !== null) {
         answerFontSize.value = result
       }else {
         storage.setStorageItem('answer-font-size', defaultAnswerFontSize)
         answerFontSize.value = defaultAnswerFontSize
       }
     });
});

const router = useRouter()

const onInput = () => {
  if (timeout) {
    clearTimeout(timeout)
  }
  timeout = setTimeout(() => search(), 400)
}

const search = () => {
  filteredQuestions.value = questions.value.filter(item =>
    item.question.toString().toLowerCase().includes(query.value.toString().toLowerCase().trim()))
}

watchEffect(() => {
  onInput()
  if (query.value === '') {
    filteredQuestions.value = questions.value
  }
})
</script>
<template>
  <BackButton @click="router.back" />
  <SettingsButton :visible="true" @click="router.push('/settings')" />
  <div class="fixed overflow-auto start-0 top-0 end-0 bottom-0 w-full h-full body">
    <div class="ms-4 me-4 mt-4">
      <div v-auto-animate>
        <div v-for="[index, item] of filteredQuestions.entries()" :key="item"
             :class="index !== filteredQuestions.length - 1 ? `mb-4` : `mt-2 mb-20`">
          <p :class="questionFontSize" class="nnn"><strong>{{ index + 1 }}. {{ item.question }}</strong></p>
          <p :class="answerFontSize" class="text-color nnn"><em>{{ item.answer }}</em></p>
        </div>
      </div>
    </div>
    <div>
      <input
        v-model="query"
        @input="onInput"
        class="fixed shadow-xl start-4 end-4 bottom-4 border-color-custom rounded-lg bg-[#18695A] border text-sm p-2.5 focus:outline-none"
        placeholder="Поиск..."
      />
    </div>
  </div>
</template>
<style scoped>
.body {
  background-color: #005c4b;
}

.border-color-custom {
  border-color: #013d32;
}

.text-color {
  color: #c0cfcb;
}

.nnn {
  white-space: pre-wrap;
}
</style>
