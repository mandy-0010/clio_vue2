<template>


<!--header-->
<div class="container ">
 <Alert/>
<nav class="navbar navbar-expand-lg navbar-light bg-light mt-4 text-right">
  <a  href="#" class="font-italic text-dbrown text-decoration-none" > <h3>CLio ACcessory</h3></a>
   <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon "></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-4">
      <li class="nav-item active" @click="fresh()"><i class="bi bi-bookmark-heart"></i>
        <router-link to="/Jindex"  class="nav-link text-dbrown"  >Home/首頁 <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Productlist" class="nav-link text-dbrown" >Products/商品</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/About"  class="nav-link text-dbrown" >About/關於</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Contact" class="nav-link text-dbrown" >Contact/聯絡</router-link>
      </li>
    </ul>
  <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
       <router-link  to="/Login"  class="nav-link text-dbrown"><span class="material-icons">
          account_circle</span></router-link >
      </li>
      <li class="nav-item active">
        <router-link  to="/Checkout"  class="nav-link text-dbrown" ><span class="material-icons">
          shopping_cart</span><span>({{cart.carts.length}})</span></router-link>
      </li>
          
  <li class="nav-item active">  
  <!--我的最愛data-toggle="dropdown"-->
  <div class="dropdown ">
        <a  class="btn  text-dbrown px-0" href="#" role="button" data-toggle="dropdown" aria-expanded="false" ><span class="material-icons ">
          favorite</span> <span class="">({{ favoritesLength}})</span></a>
 
 <div class="dropdown-menu dropdown-menu-right">
    <h5 class="text-center py-2">我的最愛</h5>
    <table class="table" >
      <tbody>
       <tr class="" v-for="favorite in favorites" :key="favorite.id">
        <td class="py-2 text-center" width="">
        <a href="#" class="text-danger border-0" @click.prevent="removeFavorite(favorite, false)" >
        <i class="fas fa-times"  ></i></a></td>
       
        <td class="py-2 px-1 text-center" width="">
         {{ favorite.title }}
        </td>
        <td class="py-1 px-0 text-center" width="">
        <button class="btn text-dbrown btn-sm py-1" @click="addtoCart(favorite.id, 1)">
        <span class="material-icons" >
          shopping_cart</span></button>
        </td>
       </tr>
       <tr :class="{'d-none': favorites.length}">
        <td class="text-center">我的最愛是空的</td>
       </tr>
     </tbody>
   </table>
  </div>
  </div> 
</li>
</ul>
 </div>     
 </nav>
 


<!--section 清單列表-->
<section>
<!--結帳步驟-->
<div class="mt-5 row justify-content-center">
<div class="my-3 pt-2 col-md-10">
<div class="row">
   <!--step1-->
   <div class="col-sm-3 rounded d-none d-sm-block justify-content-center ">
     <h6 class="text-center text-dbrown">Step 1 </h6>
     <h4 class="text-center text-dbrown"> 購物明細</h4>
   </div>
     
   <div class="col-sm-1 d-none d-sm-block text-dbrown align-self-center">
       <span class="material-icons">
        forward
        </span>
   </div> 
    
   <!--step2-->
   <div class="col-sm-3 col-12 rounded justify-content-center bg-dbrown">
     <h6 class="text-center text-white">Step 2 </h6> 
     <h4 class="text-center text-white"> 填寫資料</h4>
   </div>
   
   <div class="col-sm-1 d-none d-sm-block text-dbrown align-self-center">
       <span class="material-icons">
        forward
        </span>
   </div> 
   
   <!--step3-->
   <div class="col-sm-3 d-none d-sm-block justify-content-center">
     <h6 class="text-center text-dbrown">Step 3 </h6> 
     <h4 class="text-center text-dbrown  "> 完成訂單</h4>
   </div>


</div>
</div>
</div>
<!--購物車清單-->
<div class="mt-5 row ">
<!--訂單資訊-->
 <div class="col-md-6 mt-2">
  <h5 class="bg-dbrown text-white py-2 font-weight-bold text-center">訂單資訊</h5>
  <table class="table mt-3">
          <thead>
            <th></th>
            <th>商品資料</th>
            <th>數量</th>
            <th>價格</th>
            
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id" >
              <td > <div style="height:50px;width:50px; background-size: cover; background-position: center"
                :style="{backgroundImage: `url(${item.product.imageUrl})`}">
                </div></td>
              <td class="align-middle">
                {{ item.product.title }}
                <div class="text-danger" v-if="item.coupon">
                  已套用優惠券
                </div> 
              </td>
              <td class="align-middle">{{ item.qty }}{{ item.product.unit }}</td>
              <td class="align-middle ">${{ item.final_total }}</td>
              <td class="align-middle">
                
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              
              <td colspan="3" class="text-right">總計</td>
              
              <td class="">${{ cart.total }}</td>
              
            </tr>
             <tr v-if="cart.final_total !== cart.total">
              
              <td colspan="3" class="text-right text-danger">折扣價</td>
              <td class=" text-danger">${{ cart.final_total }}</td>
            </tr> 
          </tfoot>
  </table>
<!--購物須知-->
 <div class="row">
   <div class="col-12">
   <div class="bg-brown">
     <h5 class="bg-dbrown text-white py-2 font-weight-bold text-center">購物須知</h5>
     <h6 class=" text-secondary font-weight-bold pl-3">商品購買須知</h6>
     <p class=" text-secondary  px-3">產品因拍攝關係顏色可能略有差異，實際以廠商出貨為主。 商品情境照為示意用，僅商品主體不包含其他配件，請以規格內容物為主。
        CLio ACcessory盡可能確保所列商品備貨充足，但偶爾仍會有產品售罄的情況。如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。任何訂單變動均會在訂單總額與出貨訊息內更新。</p>
    </div>
   </div>
  </div>
</div>
   <!--顧客資訊-->
<div class="col-md-6 mt-2">
   <h5 class="bg-dbrown text-white py-2 font-weight-bold text-center">顧客資訊</h5>
    <div id="app" class="container">
  <div class=" row my-4 justify-content-center">
  <div class=" col-md-12 justify-content-center">
    <validation-observer v-slot="{ invalid }">
    <form @submit.prevent="submitForm">
       <!--email-->
       <validation-provider rules="required|email" class="form-group" tag="div" v-slot="{ errors, classes, passed }">
        <!-- 輸入框 -->
        <label for="email">Email</label>
        <input id="email" type="email" name="email" v-model="form.user.email"
               class="form-control" :class="classes">
        <!-- 錯誤訊息 -->
        <span class="invalid-feedback">{{ errors[0] }}</span>
        <span v-if="passed" class="valid-feedback">Email 正確</span>
      </validation-provider>
      <!--姓名-->
      <validation-provider rules="required|" class="form-group" tag="div" v-slot="{ errors, classes, passed }">
        <!-- 輸入框 -->
        <label for="username">收件人姓名</label>
        <input id="username" type="text" name="name" v-model="form.user.name"
               class="form-control" :class="classes">
        <!-- 錯誤訊息 -->
        <span class="invalid-feedback">{{ errors[0] }}</span>
        <span v-if="passed" class="valid-feedback">姓名 正確</span>
      </validation-provider>
      <!--電話-->
      <validation-provider rules="required|" class="form-group" tag="div" v-slot="{ errors, classes, passed }">
        <!-- 輸入框 -->
        <label for="usertel">收件人電話</label>
        <input id="usertel" type="text" name="tel" v-model="form.user.tel"
               class="form-control" :class="classes">
        <!-- 錯誤訊息 -->
        <span class="invalid-feedback">{{ errors[0] }}</span>
        <span v-if="passed" class="valid-feedback">電話 正確</span>
      </validation-provider>
      <!--地址-->
      <validation-provider rules="required|" class="form-group" tag="div" v-slot="{ errors, classes, passed }">
        <!-- 輸入框 -->
        <label for="useraddress">收件人地址</label>
        <input id="useraddress" type="text" name="address" v-model="form.user.address"
               class="form-control" :class="classes">
        <!-- 錯誤訊息 -->
        <span class="invalid-feedback">{{ errors[0] }}</span>
        <span v-if="passed" class="valid-feedback">地址 正確</span>
      </validation-provider>
       <button type="submit" class="btn btn-dbrown text-white font-weight-bold" :disabled="invalid">送出表單</button>
    </form>
  </validation-observer>
</div>
</div>
</div>   
   
   
   </div>

  

</div>
  
  

</section>
   


 

 
<!--footer-->
<section>
  <div class="row  bg-brown pt-5">
    <div class="col-md-4 pb-5 pl-lg-4 ">
      <h5 class="text-white font-weight-bold pb-2">品牌故事</h5>
      <a href="#" class="text-decoration-none "><h6 class="text-white font-weight-bold">關於品牌</h6></a>
      <a href="#" class="text-decoration-none "><h6 class="text-white font-weight-bold">聯絡我們</h6></a>
    </div>
    <div class="col-md-4 pb-5 pl-lg-4 pl-md-1">
      <h5 class="text-white font-weight-bold pb-2">商品專區</h5>
      <router-link to="/Productlist" class="text-decoration-none"><h6 class="text-white font-weight-bold text-nowrap">戒指 <span class="text-white-50">Rings</span></h6></router-link>
      <router-link to="/Productlist" class="text-decoration-none"><h6 class="text-white font-weight-bold text-nowrap">項鍊 <span class="text-white-50">Necklaces</span></h6></router-link>
      <router-link to="/Productlist" class="text-decoration-none"><h6 class="text-white font-weight-bold text-nowrap">眼鏡 <span class="text-white-50">Glasses</span></h6></router-link>
      <router-link to="/Productlist"class="text-decoration-none"><h6 class="text-white font-weight-bold text-nowrap">手錶 <span class="text-white-50">Watches</span></h6></router-link>
      <router-link to="/Productlist" class="text-decoration-none"><h6 class="text-white font-weight-bold text-nowrap">手鍊 <span class="text-white-50">Bracelets</span></h6></router-link>
      <router-link to="/Productlist" class="text-decoration-none"><h6 class="text-white font-weight-bold text-nowrap">耳環 <span class="text-white-50">Earrings</span></h6></router-link>
    </div>
    <div class="col-md-4 pb-5 pl-lg-4 pl-md-1">
      <h5 class="text-white font-weight-bold pb-2">聯絡我們</h5>
      <h6 class="text-white font-weight-bold">電話: 02 122 5678</h6>
      <h6 class="text-white font-weight-bold ">Email:<span>clioservice@gmail.com</span></h6>
      <p class="text-white font-weight-bold">MON - FRI : 9:00 am - 18:00pm</p>
      <div class="d-flex ">
      <a href="#" class="px-2"><i class="fab fa-facebook-square text-white  fa-2x"></i></a>
      <a href="#" class="px-2"><i class="fab fab fa-instagram text-white  fa-2x"></i></a>
      <a href="#" class="px-2"><i class="fab fab fa-line text-white  fa-2x"></i></a>
      </div>
   </div>

  </div>


</section> 
 


 
 
 
</div><!--container-->

</template>



<script>

import $ from 'jquery';
import { mapGetters, mapActions } from 'vuex';
import Alert from '@/components/AlertMessage';

export default {
  components: {
    Alert,
  },
  data() {
    return {
      products: [],
      product: {},//回傳的單一產品內容
      productid:'' ,//回傳的單一產品的id
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      cart: {},
      isLoading: false,
      coupon_code: '',
     
      //loveItems:JSON.parse(localStorage.getItem('collectedItems')) || [],
    };
  },

  computed: {
    filterProducts() {
      const vm = this;
      if (vm.filterText) {
        vm.select = '全部商品';
        return vm.products.filter(item => item.title.indexOf(vm.filterText) !== -1);
      }
      if (vm.select !== '全部商品') {
        return vm.products.filter(item => item.category === vm.select);
      }
      return vm.products;
    },
    ...mapGetters(['isLoading']),
    ...mapGetters('productsModules', ['products']),
    
    ...mapGetters('alertMessageModules', ['messages']),
   
    ...mapGetters('favoriteModules', ['favorites', 'favoritesLength']),
  },
  methods: {
     getProducts() {
      this.$store.dispatch('productsModules/getProducts', { isPagination: false });
    },

    //取得單一商品
  getProduct(id) {
    const vm = this;
    const url =  `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
    vm.productid = vm.product.id;
    this.$http.get(url).then((response) => {
      vm.product = response.data.product;
      $('#productModal').modal('show');
      console.log(response);
      vm.productid = '';
    });
  },
    //加到購物車
  addtoCart(id, qty = 1) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
     
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(url, { data: cart }).then((response) => {
        console.log(response);
       
        vm.getCart();
        $('#productModal').modal('hide');
        this.$store.dispatch('alertMessageModules/updateMessage', { message: response.data.message, status: 'success' }, { root: true });
      });
      
  },
    getCart() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        // vm.products = response.data.products;
        vm.cart = response.data.data;
        console.log(response);
        vm.isLoading = false;
      });
    },
     removeCartItem(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(url).then(() => {
        vm.getCart();
        vm.isLoading = false;
      });
    },
    addCouponCode() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.isLoading = true;
      this.$http.post(url, { data: coupon }).then((response) => {
        console.log(response);
        vm.getCart();
        vm.isLoading = false;
      });
    },
    submitForm() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      const order = vm.form;
      // vm.isLoading = true;
          this.$http.post(url, { data: order }).then((response) => {
            console.log('訂單已建立', response);
            if (response.data.success) {
              vm.$router.push(`/final/${response.data.orderId}`);
            }
          });
          
    
    },
    
    //自動刷新頁面1/1000秒
    fresh(){
     setTimeout('window.location.reload()',0.1);
   },
   //加入我的最愛
    addFavorite(product) {
      this.$store.dispatch('favoriteModules/addToFavorite', product);
    },

    //移除我的最愛
     removeFavorite(favorite, delall) {
      this.$store.dispatch('favoriteModules/removeFavorite', { favoriteItem: favorite, delall });
    },
    ...mapActions('favoriteModules', ['getFavorite']),
  
   //自動刷新頁面1/1000秒
    fresh(){
     setTimeout('window.location.reload()',0.1);
   },


   getParams() {
      if (this.$route.query.category) {
        this.select = this.$route.query.category;
      }
  },
   
   getCategory(category) {
      const vm = this;
      vm.select = category;
      if (vm.filterText) {
        vm.filterText = '';
      }
      if (this.$route.query.category) {
        vm.$router.push('/productslist');
      }
  },

  search() {
      const vm = this;
      vm.filterText = vm.searchText;
      vm.searchText = '';
  },
  },
 
 
  created(){
   const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
   this.$http.defaults.headers.common.Authorization = `${token}`;
   this.getProducts();
   this.getCart();
   this.getParams();
   this.$store.dispatch('favoriteModules/getFavorite');
   
      
},






};
 </script>