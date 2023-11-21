<script setup lang="ts">
import CardComponent from './CardComponent.vue'
import { getRandomNumber, getRandomEnumValue } from '@/utils'

// Generate randoms numbers
const min = 1
const max = 12
const amountOfPossibleAnswers = 6

const first = getRandomNumber(min, max)
const second = getRandomNumber(min, max)

const randomEquation = getRandomEnumValue(Symbols)

const possibleAnswers = Array.from({ length: amountOfPossibleAnswers - 1 }, () =>
  getRandomNumber(min, max)
)
</script>

<template>
  <div class="content">
    Content
    <CardComponent :card="{ type: 'number', number: 5 }" />
  </div>
</template>

<style scoped>
div .content {
  flex: 1;
}
</style>
