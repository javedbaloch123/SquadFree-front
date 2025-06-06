<script setup>

  import { onMounted, ref } from 'vue';
  import axios from 'axios';
  import  Loading  from 'vue-loading-overlay';
  
  const team = ref([]);
  const isLoading = ref(true);

  onMounted(async()=>{
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/team');
      team.value = response.data;
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
    <h1 class="text-center">Team</h1>
    <slot></slot>
    <div class="row">
      <table class="table mt-4 mb-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Profession</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="team in team" :key="team.id">
             <td>{{ team.id }}</td>
             <td>{{ team.name }}</td>
             <td>{{ team.profession }}</td>
             <td>{{ team.desc }}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
</template>