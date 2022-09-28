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
 
<!--section-->
<section>
<div class="row">
<!--list-->
<div class="col-md-3 mt-5 mb-5">
  <div class="sticky-top">  
  <div class="list-group">
   <ul class="list-group mb-3 category" >
   <li   class="list-group-item list-group-item-action h6 border border-brown" 
     v-for="(category, index) in categories" :key="index" 
    :class="{'active': select == category.title}" 
    @click="getCategory(category.title)" >
     <i :class="category.icon"></i>
     {{ category.title }} 
     </li>
    </ul>

  
  
  
  </div>
  </div>


</div><!--list end-->


<!--產品card-->
<div class="col-md-9 mt-5">
  <div class="row ">
    
      <div class="col-md-6 mb-4" v-for="product in filterProducts" :key="product.id" >
        <div class="card border-0 shadow-sm">
        <div class="love-icon" ><!-- 我的最愛 -->
        <label class="ui-checked-display"  >
        <input  type="checkbox" class="ui-checkbox" >
         <i class="fas fa-heart  fa-2x ui-show text-white"  @click="removeFavorite(product, false)" ></i>
         <i class="fal fa-heart  fa-2x ui-hidden text-white "@click="addFavorite(product)"></i>
         </input>
         </label>
         </div>
          <div style="height: 250px; background-size: cover; background-position: center"
            :style="{backgroundImage: `url(${product.imageUrl})`}">
          </div>
          <div class="card-body">
            
            <h5 class="card-title">
              <h5 href="#" class="text-dark">{{ product.title }}</h5>
            </h5>
            <p class="card-text">{{ product.content }}</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
              <del class="h6" v-if="product.price">$ {{ product.origin_price }} 元</del>
              <div class="h5" v-if="product.price">$ {{ product.price }} 元</div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <button type="button" class="btn btn-outline-dbrown btn-sm" @click="getProduct(product.id)">
              <i class="fas fa-spinner fa-spin" v-if="productid === product.id"></i>
              查看更多
            </button>
            <button type="button" class="btn btn-outline-dbrown btn-sm ml-auto" @click="addtoCart(product.id)">
              <i class="fas fa-spinner fa-spin" v-if="productid === product.id"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div> 
     
 </div><!--產品card end-->
   

   <!--modal-->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid" alt="">
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">{{ product.description }}</footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
              <del class="h6" v-if="product.price">售價$ {{ product.origin_price }} 元</del>
              <div class="h4" v-if="product.price">特價$ {{ product.price }} 元</div>
            </div>
            <select name="" class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">
                數量 {{num}} {{product.unit}}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計 <strong>{{ product.num * product.price }}</strong> 元
            </div>
            <button type="button" class="btn btn-dbrown text-white"
              @click="addtoCart(product.id, product.num)">
              <i class="fas fa-spinner fa-spin" v-if="product.id === productid"></i>
              加到購物車
            </button>
          </div>
          </div>
      </div>
    </div>
   
   
</div><!--end-->

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
  name: 'Productlist',
  components: {
    Alert,
  },
  data() {
    return {
      select: '全部商品',
      filterText: '',
      searchText: '',
      categories: [
        { title: '全部商品', icon: 'fas fa-gift' },
        { title: '耳環', icon: 'fab fa-gratipay' },
        { title: '戒指', icon: 'far fa-rings-wedding' },
        { title: '項鍊', icon: 'fab fa-digital-ocean' },
        { title: '手鍊', icon: 'fas fa-dumbbell' },
        { title: '眼鏡', icon: 'fad fa-glasses' },
        { title: '手錶', icon: 'fas fa-shopping-bag' },
      ],
    
      
      product: [],//回傳的單一產品內容
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