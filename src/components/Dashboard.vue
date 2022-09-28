<template>
<div>
<Navbar/>
<Alert></Alert>
<div class="container-fluid">
      <div class="row">
        
      <Sidebar></Sidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <router-view></router-view>
        </main>
      </div>
    </div>
    </div>
    </template>

    <script>
    import { mapGetters } from 'vuex';
    import Sidebar from './Sidebar';
    import Navbar from './Navbar';
    import Alert from './AlertMessage';


    export default{
    
    computed: {
    ...mapGetters(['isLoading']),
    ...mapGetters('alertMessageModules', ['messages']),
  },
      
     components:{
       Sidebar,
       Navbar,
       Alert,
     },

     created(){
       const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
       this.$http.defaults.headers.common.Authorization = `${token}`;


     },

    };
    

    
    </script>