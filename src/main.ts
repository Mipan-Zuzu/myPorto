import { createApp } from "vue";
import "./style.css";
import MainView from "./view/MainView.vue";

import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

const app = createApp(MainView);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false,
    },
  },
});

app.mount("#app");
