import "./assets/main.css";

import { createApp } from "vue";
import App from "./views/App.vue";
import router from "./router";
import PiniaPersist from "pinia-plugin-persistedstate";
import { createPinia } from "pinia";

createApp(App).use(createPinia().use(PiniaPersist)).use(router).mount("#app");
