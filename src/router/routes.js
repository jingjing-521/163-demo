//路由管理模块
import Home from 'pages/Home/Home.vue'
import CategoryList from 'pages/CategoryList/CategoryList.vue'
import Profile from 'pages/Profile/Profile.vue'
import Recommend from 'pages/Recommend/Recommend.vue'
import ShopCart from 'pages/ShopCart/ShopCart.vue'
import Search from 'pages/Search/Search.vue'

import EmailLogin from 'pages/Profile/EmailLogin/EmailLogin.vue'
import PhoneLogin from 'pages/Profile/PhoneLogin/PhoneLogin.vue'

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      isShow: true
    }
  },
  {
    path: '/categorylist',
    component: CategoryList,
    meta: {
      isShow: true
    }
  },
  {
    path: '/recommend',
    component: Recommend,
    meta: {
      isShow: true
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      isShow: true
    }
  },
  {
    path: '/profile',
    component: Profile,
  },

  {
    path: '/profile/emaillogin',
    component: EmailLogin
  },

  {
    path: '/profile/phonelogin',
    component: PhoneLogin
  },
  {
    path: '/search',
    component: Search
  },
  {path: '/', redirect: '/home'}
]
