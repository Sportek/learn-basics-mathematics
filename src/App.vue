<script setup lang="ts">
import ContentComponent from './components/ContentComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <div class="app">
    <HeaderComponent />

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
