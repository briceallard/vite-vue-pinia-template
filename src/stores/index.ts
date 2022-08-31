import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// import { useAppStore } from "./modules/app";
// import { useUserStore } from "./modules/user";
//import { useAuthStore } from "./modules/auth";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

// export { useAppStore, useUserStore, useAuthStore };
export default pinia;
