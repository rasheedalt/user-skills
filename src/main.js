import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import AxiosPlugin from 'vue-axios-cors';


Vue.config.productionTip = false

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
Vue.use(VueAxios, axios);
// Vue.use(AxiosPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
