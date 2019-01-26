import Vue from 'vue';
import Router from 'vue-router';
// 首页
import Home from '@/pages/home/Home';
// 钱包
import Wallet from '@/pages/wallet/Wallet';
// 应用
import Application from '@/pages/application/Application';
// 我的
import Mine from '@/pages/mine/Mine';
// 量化
import Quantification from '@/pages/quantification/Quantification';
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Wallet',
      name: 'Wallet',
      component: Wallet
    },
    {
      path: '/Quantification',
      name: 'Quantification',
      component: Quantification
    },
    {
      path: '/Application',
      name: 'Application',
      component: Application
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
