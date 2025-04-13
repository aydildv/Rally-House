<template>
  <n-layout class="layout-wrapper">
    <n-layout-header bordered>
      <NavBar />
    </n-layout-header>

    <n-layout-content class="layout-content" embedded>
      <main class="page-content">
        <div class="content-card">
          <router-view />
        </div>
      </main>
    </n-layout-content>

    <n-layout-footer class="layout-footer" bordered>
      <Footer />
    </n-layout-footer>
  </n-layout>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* This is the real fix: */
::v-deep(.n-layout-scroll-container) {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.page-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;

  /* Add these to center inner content */
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  width: 100%;
  box-sizing: border-box;

  background-image: url("pickleball.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  backdrop-filter: brightness(0.97);
}

.page-content::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4); /* soft dark overlay */
  z-index: -1;
  background: url("pickleball.jpg") center/cover no-repeat;
  filter: brightness(0.4) blur(3px);
}

.content-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  z-index: 2;
}

@media (max-width: 768px) {
  .content-card {
    padding: 1rem;
    margin: 1rem;
  }

  .page-content::before {
    background-position: top;
    filter: brightness(0.4) blur(3px);
  }
}
</style>
