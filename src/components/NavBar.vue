<template>
  <div style="max-width: 1000px; margin: 0 auto; width: 100%">
    <n-space justify="space-between" align="center" style="padding: 1rem 2rem">
      <n-text strong style="font-size: 1.5rem">Rally House</n-text>
      <n-space>
        <RouterLink to="/"><n-button text>Home</n-button></RouterLink>
        <RouterLink to="/about"><n-button text>About Us</n-button></RouterLink>
        <RouterLink to="/contact"><n-button text>Contact</n-button></RouterLink>
      </n-space>
    </n-space>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
