<template>
  <n-config-provider>
    <n-message-provider>
      <div class="app-layout">
        <DefaultLayout />
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import DefaultLayout from "./layouts/DefaultLayout.vue";
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

.app-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
