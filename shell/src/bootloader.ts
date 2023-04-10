import { createApp } from "vue";

import "./index.scss";

import Shell from "./Shell.vue";
import { router } from "./router";
import { store } from "shell/RootStore";

createApp(Shell).use(router).use(store).mount("#app");
