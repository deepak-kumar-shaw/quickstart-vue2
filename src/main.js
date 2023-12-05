import Vue from 'vue'
import App from './App.vue'
import vuetify from "./vuetify.js";
import "../public/css/syncfusion-material/material.css";



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify
}).$mount('#app')
