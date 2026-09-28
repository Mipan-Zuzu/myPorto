import { createApp } from "vue";
import "./style.css";
import MainView from "./view/MainView.vue";

import PrimeVue from "primevue/config";
import AnimateOnScroll from "primevue/animateonscroll";
import Aura from "@primeuix/themes/aura";
import { createHead } from "@unhead/vue/client";

const app = createApp(MainView);
const head = createHead()

app.use(head)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false,
    },
  },
});

app.directive("animateonscroll", AnimateOnScroll);

app.mount("#app");
