<script setup>

  import { onMounted, ref } from 'vue';
  import axios from 'axios';
  import  Loading  from 'vue-loading-overlay';
  
  const services = ref([]);
  const isLoading = ref(true);

  onMounted(async()=>{
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/services');
      services.value = response.data;
    } catch (error) {
       console.log(error);
    }finally{
      isLoading.value = false;
    }
        
  });


  const Delete = async(id) =>{
       try {
         isLoading.value = true;
         const response = await axios.get(`http://127.0.0.1:8000/api/delete-service/${id}`);
          window.location.reload();
       } catch (error) {
        
       }finally{
        isLoading.value = false;
       }
  }

</script>

<template>
   <Loading v-if="isLoading" active="true" is_full_page="true"/>
  <div class="container">
    <h1 class="text-center">Services</h1>
     <slot></slot>
    
    <div class="row">
      <table class="table mt-4 mb-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Subtitle</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
           
          </tr>
        </thead>
        <tbody>
          
          <tr v-for="service in services" :key="service.id">
            <td>{{ service.id }}</td>
            <td>{{ service.name }}</td>
            <td>{{ service.subtitle }}</td>
            <td>{{ service.desc }}</td>
            <td><button class="btn btn-primary">Edit</button></td>
            <td><button class="btn btn-danger" @click="Delete(service.id)">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>