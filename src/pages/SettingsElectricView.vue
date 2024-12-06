<script setup>
import { BackButton, useWebAppCloudStorage } from 'vue-tg'
import { useRouter } from 'vue-router'
import { questions } from '@/constant.js'
import { onMounted, reactive, ref } from 'vue'

const router = useRouter()
const items = ref([questions.value[0], questions.value[1]])

const radioQuestionItems = reactive([
  {
    label: '10px',
    fontSize: 'text-[10px]',
    checked: false
  },
  {
    label: '12px',
    fontSize: 'text-xs',
    checked: false
  },
  {
    label: '14px',
    fontSize: 'text-sm',
    checked: false
  },
  {
    label: '16px',
    fontSize: 'text-base',
    checked: false
  },
  {
    label: '18px',
    fontSize: 'text-lg',
    checked: false
  }
]);
const radioAnswerItems = reactive([
  {
    label: '10px',
    fontSize: 'text-[10px]',
    checked: false
  },
  {
    label: '12px',
    fontSize: 'text-xs',
    checked: false
  },
  {
    label: '14px',
    fontSize: 'text-sm',
    checked: false
  },
  {
    label: '16px',
    fontSize: 'text-base',
    checked: false
  },
  {
    label: '18px',
    fontSize: 'text-lg',
    checked: false
  }
]);

const storage = useWebAppCloudStorage()

const questionFontSize = ref('')
const answerFontSize = ref('')

onMounted(async () => {
  await storage.getStorageItem('question-font-size')
    .then(result => {
      questionFontSize.value = result
      radioQuestionItems.map(item => item.fontSize === result ? item.checked = true : item.checked = false)
    })

  await storage.getStorageItem('answer-font-size')
    .then(result => {
      answerFontSize.value = result
      radioAnswerItems.map(item => item.fontSize === result ? item.checked = true : item.checked = false)
    })
})

const selectedQuestionFontSize = (v) => {
  if (v !== questionFontSize.value) {
    storage.setStorageItem('question-font-size', v)
    questionFontSize.value = v
  }
}

const selectedAnswerFontSize = (v) => {
  if (v !== answerFontSize.value) {
    storage.setStorageItem('answer-font-size', v)
    answerFontSize.value = v
  }
}

</script>

<template>
  <BackButton :visible="true" @click="router.back" />
  <div class="fixed overflow-y-auto start-0 top-0 end-0 bottom-0 w-full h-full body">
    <div class="ms-4 me-4 mt-4">
      <div v-auto-animate>
        <div v-for="[index,item] in items.entries()" :key="item"
             :class="3 !== items.length - 1 ? `mb-4` : `mt-2 mb-20`">
          <p :class="questionFontSize" class="nnn"><strong>{{ index + 1 }}. {{ item.question }}</strong></p>
          <p :class="answerFontSize" class="text-color nnn"><em>{{ item.answer }}</em></p>
        </div>
      </div>
    </div>
    <div
      class="fixed shadow-xl start-4 end-4 bottom-4 border-color-custom rounded-lg bg-[#18695A] border text-sm p-2.5 focus:outline-none"
    >
      <div class="flex flex-col gap-3">
        <div>
          <p class="text-center">Размер шрифта вопроса</p>
          <div class="flex justify-evenly">
            <div class="flex gap-1 items-center" v-for="(item, index) in radioQuestionItems" :key="item">
              <label :for="'r'+index">{{ item.label }}</label>
              <input name="question-font-size" type="radio" :id="'r'+index"
                     :checked="item.checked"
                     @change="selectedQuestionFontSize(item.fontSize)" />
            </div>
          </div>
        </div>
        <div>
          <p class="text-center">Размер шрифта ответа</p>
          <div class="flex justify-evenly">
            <div class="flex gap-1 items-center" v-for="(item, index) in radioAnswerItems" :key="item">
              <label :for="`r1`+index">{{ item.label }}</label>
              <input name="answer-font-size" type="radio" :id="`r1`+index"
                     :checked="item.checked"
                     @change="selectedAnswerFontSize(item.fontSize)" />
            </div>

          </div>
        </div>
      </div>
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