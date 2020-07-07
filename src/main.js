import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import global from './common/global_ver'
import '@/assets/css/common.scss'
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

import VeLine from 'v-charts/lib/line.common'
import VePie from 'v-charts/lib/pie.common'
Vue.config.productionTip = false

Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.component(VeLine.name, VeLine)
Vue.component(VePie.name, VePie)

Vue.prototype.GLOBAL = global
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
