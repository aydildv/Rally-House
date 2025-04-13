<template>
  <n-page-header title="We want to hear from you">
    <n-card style="max-width: 700px; margin: 0 auto">
      <n-form :model="form" :rules="rules" ref="formRef" label-width="100">
        <n-form-item label="Name" path="name">
          <n-input v-model:value="form.name" placeholder="Enter your name" />
        </n-form-item>
        <n-form-item label="Email" path="email">
          <n-input v-model:value="form.email" placeholder="Enter your email" />
        </n-form-item>
        <n-form-item label="Message" path="message">
          <n-input
            type="textarea"
            v-model:value="form.message"
            placeholder="Your message..."
          />
        </n-form-item>
        <n-button type="primary" @click="submit">Submit</n-button>
      </n-form>
    </n-card>
  </n-page-header>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useMessage } from "naive-ui";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const formRef = ref(null);
const message = useMessage();

const rules = {
  name: { required: true, message: "Name is required", trigger: "blur" },
  email: { required: true, message: "Email is required", trigger: "blur" },
  message: { required: true, message: "Message is required", trigger: "blur" },
};

const submit = async () => {
  try {
    await formRef.value?.validate();
    message.success("Message sent!");
    // TODO: Send form data to a backend or API endpoint
  } catch (err) {
    message.error("Please complete the form correctly.");
  }
};
</script>
