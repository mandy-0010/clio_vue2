import Vue from 'vue';
import VueRouter from 'vue-router';
//官方的文件
//後台頁
import Signout from '@/components/Signout';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/backstage/Login';

import Products from '@/components/backstage/Products';

import Coupons from '@/components/backstage/Coupons';
import Orders from '@/components/backstage/Orders';
import CustomerOrder from '@/components/backstage/CustomerOrders';

//前台頁面
import Jindex from '@/components/fpages/Jindex';
import Productlist from '@/components/fpages/Productlist';

import Checkout from '@/components/fpages/Checkout';
import Checkorder from '@/components/fpages/Checkorder';
import Final from '@/components/fpages/Final';
import About from '@/components/fpages/About';
import Contact from '@/components/fpages/Contact';

Vue.use(VueRouter); //啟動Router

export default new VueRouter({
  linkActiveClass: 'active',
  routes:[
    
    {
      name:'Jindex',//元件呈現的名稱
      path:'/jindex',//對應的虛擬路徑
      component: Jindex,//對應的元件
     },
     {
      name:'Checkout',//元件呈現的名稱
      path:'/checkout',//對應的虛擬路徑
      component: Checkout,//對應的元件
     },
     {
      name:'Checkorder',//元件呈現的名稱
      path:'/checkorder',//對應的虛擬路徑
      component: Checkorder,//對應的元件
     },
     {
      name:'Final',//元件呈現的名稱
      path:'/final/:orderId',//對應的虛擬路徑
      component: Final,//對應的元件
     },
     {
      name:'About',//元件呈現的名稱
      path:'/about',//對應的虛擬路徑
      component: About,//對應的元件
     },
     {
      name:'Contact',//元件呈現的名稱
      path:'/contact',//對應的虛擬路徑
      component: Contact,//對應的元件
     },
     {
      name:'Productlist',//元件呈現的名稱
      path:'/productlist',//對應的虛擬路徑
      component: Productlist,//對應的元件
      

     },
      //{
      // name:'首頁',//元件呈現的名稱
      // path:'/index',//對應的虛擬路徑
       //component: Home,//對應的元件
       //meta: { requiresAuth: true },


      //},
      //{
       // name:'Login',元件呈現的名稱
       // path:'*',//對應的虛擬路徑
        //component: Login,//對應的元件
 
 
      // },
      {
        name:'Login',//元件呈現的名稱
        path:'/login',//對應的虛擬路徑
        component: Login,//對應的元件
 
 
       },
       {
        name:'Dashboard',//元件呈現的名稱
        path:'/admin',//對應的虛擬路徑
        component: Dashboard,//對應的元件
        children: [
          {
            path: 'products',
            name: 'Products',
            component: Products,
            meta: { requiresAuth: true },
          },
          {
            path: 'coupons',
            name: 'Coupons',
            component: Coupons,
            meta: { requiresAuth: true },
          },
          {
            path: 'orders',
            name: 'Orders',
            component: Orders,
            meta: { requiresAuth: true },
          },
        ],
 
 
       },
       {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        children: [
          {
            path: 'customer_order',
            name: 'CustomerOrder',
            component: CustomerOrder,
          },
        ],
      },
      
  ],
});