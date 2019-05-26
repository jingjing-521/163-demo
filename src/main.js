import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import './mock/mockServer'
import './validate'
import Header from 'components/Header/Header.vue'
import Footer from 'components/Footer/Footer.vue'
import HeaderLogin  from 'components/HeaderLogin/HeaderLogin.vue'
Vue.component('Header',Header)
Vue.component('Footer',Footer)
Vue.component('HeaderLogin',HeaderLogin)


new Vue({
  el:'#app',
  // components:{
  //   App
  // },
  // template:'<App/>'

  render:h=>h(App),
  router,
  store
})
