import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import store from "./store";
import Home from '@views/Home.vue'
import VueSweetalert2 from 'vue-sweetalert2'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import Vuelidate from 'vuelidate'

import 'sweetalert2/dist/sweetalert2.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)
Vue.use(VueLodash, { lodash: lodash })
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(Home),
  store
})

