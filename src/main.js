import Vue from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from "./router/index.js";
import axios from "axios";
import App from "./App";
import moment from "moment";
import Vuex from "vuex";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

Vue.use(Vuex);
Vue.use(Antd);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

const store = new Vuex.Store({
  state: {
    tag: [],
    noun: [],
    general: []
  },
  mutations: {
    to_product(state, arg) {
      state.tag.push(arg);
    },
    in_product(state, arg) {
      state.tag.splice(arg.arr, 1, arg.in_products);
    },
    noun_title(state, arg) {
      state.noun[arg.index].title = arg.title;
    },
    noun_content(state, arg) {
      state.noun[arg.index].content = arg.content;
    },
    noun_add(state, arg) {
      state.noun.push(arg);
    },
    noun_delete_linst(state, arg) {
      state.noun.splice(arg, 1);
    },
    general_title(state, arg) {
      state.general[arg.index].title = arg.title;
    },
    general_content(state, arg) {
      state.general[arg.index].content = arg.content;
    },
    general_add(state, arg) {
      state.general.push(arg);
    },
    general_delete_linst(state, arg) {
      state.general.splice(arg, 1);
    }
  }
});

new Vue({
  router,
  render: h => h(App),
  store: store
}).$mount("#app");
