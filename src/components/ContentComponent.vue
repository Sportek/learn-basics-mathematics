<script setup lang="ts">
import { Game } from '@/Game'
import CardComponent from './CardComponent.vue'
import DiceIcon from './icons/DiceIcon.vue'
import { ref } from 'vue'

const game = ref(new Game(6))

const generateNewGame = () => {
  console.log('Generate new game')
  game.value = new Game(6)
}

const pickChoice = (index: number) => {
  if (game.value.answer === index) alert('Vous avez gagné!')
}
</script>

<template>
  <div class="content">
    Content

    <div class="play clickable" @click="generateNewGame()">
      <DiceIcon class="dice" />
      {{ 'Démarrer une partie' }}
    </div>

    <div class="cards-informations">
      <CardComponent :card="{ type: 'number', number: game.first }" />
      <CardComponent :card="{ type: 'math', symbol: game.equation }" />
      <CardComponent :card="{ type: 'number', number: game.second }" />
    </div>

    <div class="cards-answers">
      <CardComponent
        v-for="(card, index) in game.possibleAnswers"
        :key="index"
        :card="{ type: 'number', number: card }"
        class="clickable"
        @click="pickChoice(card)"
      />
    </div>
  </div>
</template>

<style scoped>
div .content {
  flex: 1;
}

.cards-informations {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.cards-informations div {
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cards-answers {
  display: grid;
  grid-template-columns: repeat(3, 10rem);
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.cards-answers div {
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dice {
  color: var(--color-accent);
}

.play {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
