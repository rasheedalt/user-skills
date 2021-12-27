import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '/';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = "Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type";
axios.defaults.headers.common['Access-Control-Allow-Methods'] = "POST, GET, PUT, OPTIONS, DELETE";

Vue.use(VueAxios, axios);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
