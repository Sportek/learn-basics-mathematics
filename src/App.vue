<script setup lang="ts">
import ContentComponent from './components/ContentComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div class="app">
    <ContentComponent />

    <FooterComponent />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
</style>
