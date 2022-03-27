import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;

import { registerMicroApps, start } from "qiankun";

registerMicroApps(
  [
    {
      name: "reactApp",
      entry: "//localhost:3000",
      container: "#container",
      activeRule: "/app-react",
    },
    {
      name: "vueApp",
      entry: "//localhost:8080",
      container: "#container",
      activeRule: "/app-vue",
    },
  ],
  {
    beforeLoad: (app) => {
      return Promise.resolve();
    },
    afterMount: (app) => {
      // 加载微应用前，进度条加载完成
      console.log("after mount", app.name);
      return Promise.resolve();
    },
  }
);
// 启动 qiankun
start();
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
