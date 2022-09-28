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
       <tr :class="{'d-none': favoritesLength}">
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
 
 <!--carousel-->
<div class="row mt-4" >
<div class="col-md-3   d-none d-md-block  bg-brown   " >
  
  <div class=" pt-md-5 pt-lg-5"> 
  
    <h6 class="font-italic text-white text-nowrap "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
     <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
     <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
     </svg>Monday</h6>
  </div>
  <div class="box1 d-flex  shadow  rounded align-items-center" style="background:white;height:8%;width:300px;">
  <h6 class="text-brown pl-3" >幸運戒指 </h6>
  </div>
  

  <div class="pt-md-1 py-lg-2">
    <h6 class="font-italic text-white text-nowrap  "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
     </svg>Tuesday</h6>
  </div>
  <div class="box2 d-flex shadow  rounded align-items-center" style="background:white;height:8%;width:0;">
  <h6 class="text-brown pl-3">經典耳環</h6>
  </div>
  
  <div class="pt-md-1 py-lg-2">
   <h6 class="font-italic text-white text-nowrap  "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
    </svg>Wednesday</h6>
  </div>
  <div class="box3 d-flex shadow  rounded align-items-center" style="background:white;height:8%;width:0;">
  <h6 class="text-brown pl-3">質感手鍊</h6>
  </div>
  
  <div class="pt-md-1 py-lg-2">
   <h6 class="font-italic text-white text-nowrap  "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
    </svg>Thursday</h6>
  </div>
  <div class="box4 d-flex shadow  rounded align-items-center" style="background:white;height:8%;width:0;">
  <h6 class="text-brown pl-3">手工項鍊</h6>
  </div>
  
  <div class="pt-md-1 py-lg-2">
   <h6 class="font-italic text-white text-nowrap "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
    </svg>Friday</h6>
  </div>
  <div class="box5 d-flex shadow  rounded align-items-center" style="background:white;height:8%;width:0;">
  <h6 class="text-brown pl-3">百搭手錶</h6>
  </div>

  
  <div class="pt-md-1 py-lg-2">
   <h6 class="font-italic text-white text-nowrap "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
    </svg>Holiday</h6>
  </div>
  <div class="box6 d-flex shadow  rounded align-items-center" style="background:white;height:8%;width:0;">
  <h6 class="text-brown pl-3">休閒眼鏡</h6>
  </div>





</div>
 


<div class="col-md-9 py-5 mh-100 bg-brown">

 <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class=" btn1 bg-white"  @click="getBtn()"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1" class=" btn2 bg-white" @click="getBtn()"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2" class=" btn3 bg-white" @click="getBtn()"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="3" class=" btn4 bg-white" @click="getBtn()"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="4" class=" btn5 bg-white" @click="getBtn()"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="5" class=" btn6 bg-white" @click="getBtn()"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active ">
    
      <img src="https://images.unsplash.com/photo-1598528738936-c50861cc75a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" class="d-block w-100 " alt="...">
      <div class="carousel-caption  "  >
        
        <p class="font-italic text-white">In order to be irreplaceable one must always be different.</p>
      </div>
    </div>
    <div class="carousel-item ">
      <img src="https://images.unsplash.com/photo-1528121238716-306799520ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGVhcnJpbmdzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=580&q=80" class="d-block w-100 " alt="...">
      <div class="carousel-caption ">
    
        <p class="font-italic text-white">What you can do today. nothing is impossible to a willing heart.</p>
      </div>
    </div>
    <div class="carousel-item ">
      <img src="https://images.unsplash.com/photo-1630019680362-af0477180c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" class="d-block w-100 " alt="...">
      <div class="carousel-caption ">
        
        <p class="font-italic text-white">I am a slow walker,but i never walk backwards.</p>
      </div>
    </div>

    <div class="carousel-item ">
      <img src="https://images.unsplash.com/photo-1572541397966-b372985730bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" class="d-block w-100 " alt="..." >
      <div class="carousel-caption ">
        
        <p class="font-italic text-white">Cheerfulness is the best promoter of health.</p>
      </div>
    </div>

    <div class="carousel-item ">
      <img src="https://images.unsplash.com/photo-1517902610345-76683f9f3a1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" class="d-block w-100 " alt="..." >
      <div class="carousel-caption">
        
        <p class="font-italic text-white">It’s kind of fun to do the impossible.</p>
      </div>
    </div>

    <div class="carousel-item ">
      <img src="https://images.unsplash.com/photo-1566086741792-b59059349f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=585&q=80" class="d-block w-100 " alt="..." >
      <div class="carousel-caption ">
        
        <p class="font-italic text-white">Always do your best. What you plant now, you will harvest later.</p>
      </div>
    </div>
  </div>
  <!--<button class="carousel-control-prev btn2" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next btn1" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>-->
  </div>
  
</div>
</div><!--row1-->
 

 <!--section1-->
<section class="">
 <div class="row bg-brown pl-4 pt-lg-5 pb-4">
  <h3 class="text-white font-weight-bold font-italic">商品專區</h3>
  <p class="text-white  font-italic text-lg">/Products</p>
  </div>
 <div class="row pt-3 bg-brown pb-5" >
  <div class="col-md-4 ">
   
   <div class="row ">
      <router-link to="/Productlist"  class="col-md-12 rectangle-image-wrap text-decoration-none ">
        
        <div class="px-5 four-sides rectangle-over zindex-2 d-flex justify-content-center align-items-centerborder ">
         <span class="rectangle-text">戒指</span>
         </div>
         
         <div class="bg-cover rectangle-image " style="background-image: url(https://images.unsplash.com/photo-1595843168256-bb8ed001ad49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHJpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60);height:400px">
         
         </div>
       </router-link>
     <router-link to="/Productlist" class="col-md-12 mt-md-4 mt-4 rectangle-image-wrap text-decoration-none">
       <div class="px-5 four-sides rectangle-over zindex-2 d-flex justify-content-center align-items-center">
         <span class="rectangle-text">眼鏡</span>
         </div>
       <div class="bg-cover " style="background-image: url(https://images.unsplash.com/photo-1618436458359-1abf53dab8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60);height:200px">
         
         </div>
       
       </router-link>
    </div>

  </div>

  
  
  <div class="col-md-4  ">
     <div class="row">
      <router-link to="/Productlist" class="col-md-12 mt-4 mt-md-0 rectangle-image-wrap text-decoration-none">
         <div class=" px-5 four-sides rectangle-over zindex-2 d-flex justify-content-center align-items-center">
         <span class="rectangle-text">耳環</span>
         </div>
         <div class="bg-cover " style="background-image: url(https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGVhcnJpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60);height:200px">
         
         </div>
       </router-link>
      <router-link to="/Productlist" class="col-md-12 mt-md-4 mt-4 rectangle-image-wrap text-decoration-none">
        <div class=" px-5 four-sides rectangle-over zindex-2 d-flex justify-content-center align-items-center">
         <span class="rectangle-text">手鍊</span>
         </div>
         
         <div class="bg-cover " style="background-image: url(https://images.unsplash.com/photo-1623680621227-533cdf197a31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60);height:400px">
         
         </div>
       
       </router-link>
    </div>
   </div>
 


  <div class="col-md-4  ">
     <div class="row">
     <router-link to="/Productlist" class="col-md-12 mt-4 mt-md-0 rectangle-image-wrap text-decoration-none">
         <div class=" px-5 four-sides rectangle-over zindex-2 d-flex justify-content-center align-items-center">
         <span class="rectangle-text">手錶</span>
         </div>
         
         <div class="bg-cover " style="background-image: url(https://images.unsplash.com/photo-1528968620-57e0257ff360?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60);height:300px">
         
         </div>
       </router-link>
     <router-link to="/Productlist" class="col-md-12  mt-md-4 mt-4 rectangle-image-wrap text-decoration-none">
         <div class=" px-5 four-sides rectangle-over zindex-2 d-flex justify-content-center align-items-center">
         <span class="rectangle-text">項鍊</span>
         </div>
         <div class="bg-cover " style="background-image: url(https://images.unsplash.com/photo-1625792508553-5e66a81659fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fG5lY2tsYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60);height:300px">
         
         </div>
       
       </router-link>
    </div>
   </div>
 


  </div>
</section>

<!--section2-->
<section>

 <div class="row bg-brown pl-4 pt-5 pb-md-5 pb-3">
  <h3 class="text-white font-weight-bold font-italic">關於品牌</h3>
  <p class="text-white  font-italic text-lg">/About Us</p>
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


<!--section3-->
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

import { mapGetters, mapActions } from 'vuex';
import Alert from '@/components/AlertMessage';

import $ from 'jquery';



  export default {
  
  name: 'Jindex',
  components: {
    Alert,
  },

data() {
    return {
       //products: [],
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
      
      //isLoading: false,
      coupon_code: '',
      
      cart:{},
      
      //loveItems:JSON.parse(localStorage.getItem('collectedItems')) || [],//重要
      
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
    //...mapGetters(['isLoading']),
    ...mapGetters('productsModules', ['products']),
    
    ...mapGetters('alertMessageModules', ['messages']),
   
    ...mapGetters('favoriteModules', ['favorites', 'favoritesLength']),
  },

methods: {
  
  //carousel-從jquery改寫成vue可以使用的
    getBtn(){
    $(document).ready(function()
  {
   $(function(){
  $(".btn1").click(function(){
    
    $(".box1").animate({width:"300px"});
    $(".box2").animate({width:"0px"});
    $(".box3").animate({width:"0px"});
    $(".box4").animate({width:"0px"});
    $(".box5").animate({width:"0px"});
     $(".box6").animate({width:"0px"});
     
  });
  $(".btn2").click(function(){
    
    $(".box1").animate({width:"0px"});
    $(".box2").animate({width:"300px"});
    $(".box3").animate({width:"0px"});
    $(".box4").animate({width:"0px"});
    $(".box5").animate({width:"0px"});
     $(".box6").animate({width:"0px"});
     
  });
  $(".btn3").click(function(){
    $(".box1").animate({width:"0px"});
    $(".box2").animate({width:"0px"});
    $(".box3").animate({width:"300px"});
    $(".box4").animate({width:"0px"});
    $(".box5").animate({width:"0px"});
     $(".box6").animate({width:"0px"});
     
  });
  $(".btn4").click(function(){
    $(".box1").animate({width:"0px"});
    $(".box2").animate({width:"0px"});
    $(".box3").animate({width:"0px"});
    $(".box4").animate({width:"300px"});
    $(".box5").animate({width:"0px"});
    $(".box6").animate({width:"0px"});
    
  });
  $(".btn5").click(function(){
    $(".box1").animate({width:"0px"});
    $(".box2").animate({width:"0px"});
    $(".box3").animate({width:"0px"});
    $(".box4").animate({width:"0px"});
    $(".box5").animate({width:"300px"});
    $(".box6").animate({width:"0px"});
    
  });
  $(".btn6").click(function(){
    $(".box1").animate({width:"0px"});
    $(".box2").animate({width:"0px"});
    $(".box3").animate({width:"0px"});
    $(".box4").animate({width:"0px"});
    $(".box5").animate({width:"0px"});
    $(".box6").animate({width:"300px"});
  
  });
   });
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
      //vm.isLoading = true;
      this.$http.get(url).then((response) => {
        // vm.products = response.data.products;
        vm.cart = response.data.data;
        console.log(response);
        //vm.isLoading = false;
      });
    },
    

    removeCartItem(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      //vm.isLoading = true;
      this.$http.delete(url).then(() => {
        vm.getCart();
        //vm.isLoading = false;
      });
    },
    
    addCouponCode() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      //vm.isLoading = true;
      this.$http.post(url, { data: coupon }).then((response) => {
        console.log(response);
        vm.getCart();
        //vm.isLoading = false;
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