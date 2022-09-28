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
 


<!--section 品牌介紹-->
<section>


 <div class="row bg-brown pl-4 pt-5 pb-md-5 pb-3   mt-3">
  <h3 class="text-white font-weight-bold font-italic  mt-3">關於品牌</h3>
  <p class="text-white  font-italic text-lg  mt-3">/About Us</p>
  </div>



 <div class="row bg-brown pb-5">
    <div class="col-md-6 ">
     <h1 class="font-italic text-white mt-md-5 mt-3">CLio ACcessory</h1>
     <h6 class="font-italic text-white mt-5 letter-spacing-1 lh-lg">精心為妳準備一週的專屬穿搭飾品，<br>平價中帶有提升質感的信心，<br>小資歐膩們可隨著心情挑選，<br>願CLio ACceesory陪伴妳的每一天。</h6>
    </div>
    <div class="col-md-6 bg-cover rounded"  style="background-image:url(https://images.unsplash.com/photo-1531347520814-e80b3cbe3cba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTk5fHxhY2Nlc3Nvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60)">
      
    </div>
 </div>




  
  

</section>


<!--section 服務介紹-->  
<section>

  <div class="row bg-brown pt-5 px-lg-3 ">
     <div class="col-md-6 col-lg-3 py-5  border  border-left-0 border-right-0 border-white">
        <span class="material-icons text-white">
        local_shipping
        </span>
        <h5 class="text-white font-weight-bold ">交貨便利</h5>
        <p class="text-white">全台便利商店皆可取貨付款，如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。</p>
     </div>
     <div class="col-md-6 col-lg-3 py-5  border  border-left-0 border-right-0 border-white">
         <span class="material-icons text-white">
          card_giftcard
         </span>
         <h5 class="text-white font-weight-bold ">包裝服務</h5>
         <p class="text-white">如需額外包裝，可再下訂後通知我們，會有專人協助處理相關事宜。</p>
     </div>
     <div class="col-md-6 col-lg-3 py-5  border  border-left-0 border-right-0 border-white">
           <span class="material-icons text-white">
            lock
           </span>
          <h5 class="text-white font-weight-bold ">售後服務</h5>
          <p class="text-white">為保障買家權益， 所有商品皆享有30日的售後服務。</p>
     </div>
     <div class="col-md-6 col-lg-3 py-5  border  border-left-0 border-right-0 border-white">
        <span class="material-icons text-white">
         support_agent
         </span>
        <h5 class="text-white font-weight-bold ">客服服務</h5>
        <p class="text-white">如購買過程及收到商品有任何問題，歡迎聯繫我們， 我們會盡快回覆您。</p>
     </div>
  </div>
</section>

 

 
<!--footer-->
<section>
  <div class="row  bg-brown pt-5">
    <div class="col-md-4 pb-5 pl-lg-4 ">
      <h5 class="text-white font-weight-bold pb-2">品牌故事</h5>
      <router-link to="/About" class="text-decoration-none "><h6 class="text-white font-weight-bold">關於品牌</h6></router-link>
      <router-link to="/Contact" class="text-decoration-none "><h6 class="text-white font-weight-bold">聯絡我們</h6></router-link>
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
      
      cart:{},
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
              vm.$router.push(`/customer_checkout/${response.data.orderId}`);
            }
          });
          
    
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
    //加入我的最愛
  //clickHeart(id) {
   //const vm = this;
   //   const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      
    //  this.$http.get(url).then((response) => {
    //    vm.product = response.data.product;
        
     //   console.log(response);

     //   const loveItem = {
      //  id: vm.product.id,
        //title: vm.product.title,
        //category:vm.product.category
        //};
        //const loveItems =JSON.parse(localStorage.getItem('collectedItems')) || [];
        
       // loveItems.push(loveItem);
        
        //localStorage.setItem('collectedItems', JSON.stringify(loveItems));
       
       
        
     // });
      
      // 儲存至 localStorage
  //},
     
  //移除我的最愛
  //DisclickHeart(id) {
    //const loveItems =JSON.parse(localStorage.getItem('collectedItems')) || [];
    
    //loveItems.forEach((item, index) => {
       // if (item.id === id) {
       //   loveItems.splice(index, 1);
       // }
      //});
    
    //console.log(loveItems)
    
    //localStorage.setItem('collectedItems', JSON.stringify(loveItems));
     
    
  //},
  
  
  
    
    
    
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