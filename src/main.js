import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import CxltToastr from "cxlt-vue2-toastr";

const toastrConfigs = {
  position: "bottom left",
  timeOut: 4000,
  showMethod: "slideInLeft",
  hideMethod: "slideOutLeft",
  showDuration: 400,
  hideDuration: 400
};

Vue.use(CxltToastr, toastrConfigs);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
