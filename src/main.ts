import { createApp } from "vue";
import App from "./App.vue";
import "./styles/global.scss";

import router from "@/routes";
import piniaStore from "@/stores";
import { logger } from "./utils/logger";

createApp(App).use(logger).use(router).use(piniaStore).mount("#app");
