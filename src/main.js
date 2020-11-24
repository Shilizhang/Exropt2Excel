import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import _ from 'lodash'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(ViewUI);
Vue.use(_);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
