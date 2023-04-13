import { createApp } from "vue";

import "./index.scss";

import App from "./App.vue";
// import { router } from "./router";
import { store } from "./store";

const mountMfe = (el: any) => {
  const app = createApp(App);
  // app.use(router);
  app.use(store);
  app.mount(el);

  return {
    destroyMfe: () => {
      app.unmount();
    }
  };
};

export { mountMfe };
