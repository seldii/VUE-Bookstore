import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import bootstrap from "bootstrap";
import BootstrapVue from "bootstrap-vue";
import jQuery from "jquery";
import "bootstrap/dist/css/bootstrap.css";
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
