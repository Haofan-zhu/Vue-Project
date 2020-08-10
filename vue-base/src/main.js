import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import animated from 'animate.css' // npm install animate.css --save安装，在引入

Vue.use(animated)
new Vue({
  render: h => h(App),
}).$mount('#app')
