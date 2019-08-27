import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import Store from "../store/store";
import Axios from "axios";
import router from "./router/index";
import animated from "animate.css";

Vue.use(animated);
Vue.use(Antd);
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  store: Store
}).$mount("#app");
