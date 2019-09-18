// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

// * 首先，屏蔽掉默认样式
// import 'element-ui/lib/theme-chalk/index.css'
// * 然后，引入修改主题引用的样式
import '../theme/index.css'

Vue.use(ElementUI, {size: 'small'})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
