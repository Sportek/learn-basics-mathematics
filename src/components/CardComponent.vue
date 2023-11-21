<script setup lang="ts">
import type { Card } from '@/types'
defineProps<{
  card: Card
}>()
</script>

<template>
  <div class="card">
    {{ card.type == 'math' ? card.symbol : card.number.toString() }}
  </div>
</template>

<style scoped>
.card {
  height: 100%;
  width: 100%;
  background-color: var(--color-accent);
}
</style>
