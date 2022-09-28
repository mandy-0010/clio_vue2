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
   <div class="col-sm-3  d-none d-sm-block rounded justify-content-center ">
     <h6 class="text-center text-dbrown">Step 1 </h6>
     <h4 class="text-center text-dbrown"> 購物明細</h4>
   </div>
     
   <div class="col-sm-1 d-none d-sm-block text-dbrown align-self-center">
       <span class="material-icons">
        forward
        </span>
   </div> 
    
   <!--step2-->
   <div class="col-sm-3 d-none d-sm-block justify-content-center ">
     <h6 class="text-center text-dbrown">Step 2 </h6> 
     <h4 class="text-center text-dbrown"> 填寫資料</h4>
   </div>
   
   <div class="col-sm-1 d-none d-sm-block text-dbrown align-self-center">
       <span class="material-icons">
        forward
        </span>
   </div> 
   
   <!--step3-->
   <div class="col-sm-3 col-12 rounded justify-content-center bg-dbrown">
     <h6 class="text-center text-white">Step 3 </h6> 
     <h4 class="text-center text-white  "> 完成訂單</h4>
   </div>


</div>
</div>
</div>
<!--購物車清單-->

  <div class="my-5 row justify-content-center">
  
    <form class="col-md-8" @submit.prevent="payOrder">
      <h5 class="bg-brown text-white  font-weight-bold ">訂單資訊</h5>
      <table class="table">
        <thead>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td class="align-middle">{{ item.product.title }}</td>
            <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
            <td class="align-middle">${{ item.final_total }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="font-weight-bolder" >總計</td>
            <td class="">${{ order.total }}</td>
          </tr>
        </tfoot>
      </table>
      
      <h5 class="bg-brown text-white  font-weight-bold ">顧客資訊</h5>
      <table class="table">
        <tbody>
          <tr>
            <th width="100">Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>姓名</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <span v-if="!order.is_paid">尚未付款</span>
              <span v-else class="text-danger">付款完成</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-right" v-if="order.is_paid === false">
        <button class="btn btn-dbrown text-white">確認付款去</button>
      </div>
    </form>
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
      order: {
        user: {},
      },
      orderId: '',
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
    getOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.order = response.data.order;
        console.log(response);
        vm.isLoading = false;
      });
    },
    payOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.post(url).then((response) => {
        console.log(response);
        if (response.data.success) {
          vm.getOrder();
        }
        vm.isLoading = false;
      });
    },
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
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
    console.log(this.orderId);
    this.getProducts();
    this.getCart();
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `${token}`;
    this.getParams();
    this.$store.dispatch('favoriteModules/getFavorite');

  },
};
</script>