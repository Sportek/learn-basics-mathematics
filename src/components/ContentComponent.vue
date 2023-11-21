<script setup lang="ts">
import { Game } from '@/Game'
import CardComponent from './CardComponent.vue'
import DiceIcon from './icons/DiceIcon.vue'
import { ref } from 'vue'
import confetti from 'canvas-confetti'

const game = ref(new Game(6))

const consecutiveVictory = ref(0)

const nWins = ref(0)
const nLoses = ref(0)

const generateNewGame = () => {
  game.value = new Game(6)
}

const createConfetti = () => {
  confetti()
}

const pickChoice = (index: number) => {
  if (index === game.value.answer) {
    // gagné
    consecutiveVictory.value++
    nWins.value++
    createConfetti()
  } else {
    // perdu
    nLoses.value++
    consecutiveVictory.value = 0
  }

  generateNewGame()
}

const calculateRatio = (nWins: number, nLoses: number) => {
  let result = Math.floor((nWins / nLoses) * 100) / 100
  if (isNaN(result)) {
    result = 0
  } else if (!isFinite(result)) {
    result = 1
  }
  return result
}
</script>

<template>
  <div class="content">
    <div class="wrapper">
      <div class="play clickable" @click="generateNewGame()">
        <DiceIcon class="dice" />
        <div class="title">Démarrer une partie</div>
      </div>

      <div class="cards-informations">
        <CardComponent :card="{ type: 'number', number: game.first }" />
        <CardComponent :card="{ type: 'math', symbol: game.equation }" />
        <CardComponent :card="{ type: 'number', number: game.second }" />
      </div>

      <div class="select-answer">
        <div class="title">Sélectionner la réponse à l'équation</div>
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

      <div class="stats">
        <div class="title">Statistiques</div>
        <div>Parties gagnées : {{ nWins }}</div>
        <div>Parties perdues : {{ nLoses }}</div>
        <div>Ratio : {{ calculateRatio(nWins, nLoses) }}</div>
        <div class="consecutive-victory">
          Nombre de victoire consécutives : {{ consecutiveVictory }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
div .content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  flex: 1;
  max-width: 500px;
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
  width: 90px;
  height: 140px;
  color: white;
  font-size: xx-large;
  font-weight: 800;
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
  color: white;
  padding: 0.5rem;
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

.select-answer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.stats {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-weight: 600;
}
</style>
