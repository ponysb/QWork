import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/home/Home.vue";
import Version from "../components/version/Layout.vue";
import ContentEdi from "../components/contentedi/Layout.vue";
import Framework from "../components/framework/Layout.vue";
import Demand from "../components/demand/Layout.vue";
import Noun from "../components/noun/Layout.vue";
import General from "../components/general/Layout.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },

    {
      path: "/contentedi",
      component: ContentEdi
    },
    {
      path: "/version",
      component: Version
    },
    {
      path: "/framework",
      component: Framework
    },
    {
      path: "/demand",
      component: Demand
    },
    {
      path: "/noun",
      component: Noun
    },
    {
      path: "/general",
      component: General
    }
  ]
});
