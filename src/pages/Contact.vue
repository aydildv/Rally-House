<!-- adapted this code from ChatGPT -->

<template>
  <section class="subscribe-wrapper">
    <template v-if="!submitted">
      <h2 class="headline">Subscribe to stay in the loop</h2>

      <n-card style="max-width: 700px; margin: 0 auto" bordered>
        <n-form :model="form" :rules="rules" ref="formRef" label-width="120">
          <n-space vertical size="large">
            <n-form-item label="Name" path="name">
              <n-input
                v-model:value="form.name"
                placeholder="Enter your name"
              />
            </n-form-item>

            <n-form-item label="Email" path="email">
              <n-input
                v-model:value="form.email"
                placeholder="Enter your email"
              />
            </n-form-item>

            <n-form-item label="Interest" path="interest">
              <n-select
                v-model:value="form.interest"
                placeholder="What are you looking for?"
                :options="interestOptions"
              />
            </n-form-item>

            <n-form-item>
              <n-button type="primary" @click="submit">Subscribe</n-button>
            </n-form-item>
          </n-space>
        </n-form>
      </n-card>
    </template>

    <template v-else>
      <n-card style="max-width: 700px; margin: 0 auto" bordered>
        <n-result
          status="success"
          title="You're subscribed!"
          description="Thanks for joining the Rally. We'll keep you in the loop with updates, events, and opening day details."
        />
      </n-card>
    </template>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";

const form = reactive({
  name: "",
  email: "",
  interest: null,
});

const submitted = ref(false);
const formRef = ref(null);

const interestOptions = [
  { label: "Open Play & Court Rentals", value: "open_play" },
  { label: "Leagues & Tournaments", value: "leagues" },
  { label: "Beginner Lessons", value: "lessons" },
  { label: "Family-Friendly Events", value: "family" },
  { label: "News & Opening Announcements", value: "news" },
];

const rules = {
  name: { required: true, message: "Name is required", trigger: "blur" },
  email: { required: true, message: "Email is required", trigger: "blur" },
  interest: {
    required: true,
    message: "Please select an interest",
    trigger: "change",
  },
};

const submit = async () => {
  try {
    await formRef.value?.validate();
    submitted.value = true;
  } catch (err) {
    submitted.value = false;
  }
};
</script>

<style scoped>
.subscribe-wrapper {
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
</style>
