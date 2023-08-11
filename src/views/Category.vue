<template>
    <div class="grid grid-cols-5 gap-5">
     
  <div v-for="category in getCategory"  class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
     <router-link :to="{ name: 'FilterCategory', params: { category: category }}">
      <a href="#">
          <img src="https://media.istockphoto.com/id/1456705409/vector/shopping-cart-check-mark-icon-in-comic-style-buy-approval-cartoon-vector-illustration-on.jpg?s=170667a&w=0&k=20&c=cO965PfGRtaDtya-WXySagYdcVI4noUrDMo1BoxBFDQ="/>
      </a>
      <div class="p-5">
          <a href="#">
              <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{{ category }}</h5>
          </a>
      </div>
  </router-link> 
  </div>
    </div>
  </template>
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
      computed: {
          ...mapGetters('category', ['getCategory']),
      },
      methods: {
          ...mapActions('category', ['fetchCategory']),
          
      },
      created() {
          this.fetchCategory();
      },
  }
  </script>