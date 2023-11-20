<script setup lang="ts">
import HeartIcon from './icons/HeartIcon.vue'
</script>

<template>
  <div class="footer">Fait avec <HeartIcon /> par Gabriel Landry</div>
</template>

<style scoped>
.footer {
  width: 100%;
  background-color: var(--color-darker-background);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
}

HeartIcon {
  display: none;
}
</style>
