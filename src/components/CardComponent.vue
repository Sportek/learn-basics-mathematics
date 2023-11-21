<script setup lang="ts">
defineProps<{
  card: Card
}>()
</script>

<template>
  <div class="card">{{ card.type == 'math' ? card.symbol : card.number.toString() }}</div>
</template>

<style scoped>
.card {
  height: 100%;
  width: 100%;
}
</style>
