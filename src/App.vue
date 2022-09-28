<template>
  <div id="app">
    
  <router-view v-if="isRouterAlive"></router-view>
    
  </div>
  
</template>

<script>

import Signout from './components/Signout'

export default {
  name: 'App',
  components: {
    Signout
  },

 provide(){    
    return {
      reload: this.reload      
    }
  },
  data() {
    return {
      isRouterAlive: true,
  };
  },
  methods: {
    reload () {
      console.log('reload occure')
      this.isRouterAlive = false;
      this.$nextTick( ()=> { this.isRouterAlive=true } ) ;
    },
  },
  

  

 
   
  created(){
    const api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
    console.log(process.env.APIPATH,process.env.CUSTOMPATH);
    this.$http.get(api).then((response) => {
    console.log(response.data);
});
  },
};
</script>
<style lang="scss">

@import "./assets/all";
</style>
