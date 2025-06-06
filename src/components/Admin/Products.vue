<script setup>

  import { onMounted, ref } from 'vue';
  import axios from 'axios';
  import  Loading  from 'vue-loading-overlay';
  
  const products = ref([]);
  const isLoading = ref(true);

  onMounted(async()=>{
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/products');
      products.value = response.data;
    } catch (error) {
       console.log(error);
    }finally{
      isLoading.value = false;
    }
        
  });

</script>

<template>
  <Loading v-if="isLoading" active="true" is_full_page="true"/>
  <div class="container">
    <h1 class="text-center">Products</h1>
   <slot></slot>
    <div class="row">
      <table class="table mt-4 mb-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Client</th>
            <th scope="col">Start Date</th>
            <th scope="col">Deliever Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.desc }}</td>
            <td>{{ product.client }}</td>
            <td>{{ product.start_date }}</td>
            <td>{{ product.deliever_date }}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
</template>