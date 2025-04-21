<template>
  <section class="about-wrapper">
    <h2 class="headline">About Rally House</h2>

    <n-card size="large" class="about-card" bordered>
      <n-space vertical size="large">
        <n-text>
          Rally House was born from a love of movement, fun, and community. We
          believe pickleball has the power to bring people together, from
          friendly pick-up games to competitive tournaments.
        </n-text>

        <n-text>
          Our mission is to create an inviting and high-energy space where
          players of all ages and skill levels can connect, play, and grow.
          Whether you're picking up a paddle for the first time or training for
          your next match, Rally House will offer:
        </n-text>

        <ul class="bullet-list">
          <li>• Professional-grade indoor courts</li>
          <li>• Lessons, leagues, and tournaments</li>
          <li>• Social events and mixers</li>
          <li>• A welcoming environment for everyone</li>
        </ul>

        <n-text>
          Based in Pennsylvania, we're getting ready to serve up something
          special and we can't wait to welcome you. Until then, let's connect
          online and build the Rally House community together!
        </n-text>
      </n-space>
    </n-card>
  </section>
</template>

<style scoped>
.about-wrapper {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
  text-align: center;
}

.headline {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

.about-card {
  padding: 1.5rem;
  text-align: left;
}

.bullet-list {
  padding-left: 1rem;
  margin: 0;
  list-style: none;
}

.bullet-list li {
  margin-bottom: 0.5rem;
  font-size: 15px;
  line-height: 1.5;
}
</style>
