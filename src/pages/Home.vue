<!-- adapted this code from ChatGPT -->

<template>
  <section class="home-wrapper">
    <h2 class="headline">
      Welcome to Rally House – Your Pickleball Destination
    </h2>

    <n-card size="large" class="home-card" bordered>
      <n-space vertical size="large">
        <n-text>
          Rally House is more than just a place to play. It’s where passion,
          community, and competition meet. Whether you're a seasoned player or
          new to the game, Rally House is your future hub for all things
          pickleball in Pennsylvania.
        </n-text>

        <n-text>
          While we prepare to open our state-of-the-art facility, we’re rallying
          the community online. Sign up now to stay in the loop about our grand
          opening, early access events, memberships, leagues, and more!
        </n-text>

        <ul class="bullet-list">
          <li>🔹 Join the Rally – Be the first to know</li>
          <li>🔹 Get exclusive updates, events, and launch perks</li>
          <li>🔹 Connect with the growing local pickleball community</li>
        </ul>

        <router-link to="/contact">
          <n-button type="primary" strong secondary size="large">
            Join the Rally
          </n-button>
        </router-link>
      </n-space>
    </n-card>
  </section>
</template>

<style scoped>
.home-wrapper {
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

.home-card {
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

router-link {
  display: inline-block;
}
</style>
