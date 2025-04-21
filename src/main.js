// adapted this code from ChatGPT
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import NaiveUI from "naive-ui";

createApp(App).use(router).use(NaiveUI).mount("#app");
