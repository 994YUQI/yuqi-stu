import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入css样式
import "./assets/styles/base.css";
import "./assets/styles/el-home.css";
import "./assets/styles/el-login.css";

// 引入Element ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
