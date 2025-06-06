
<script setup>
   import { reactive } from 'vue';
   import axios from 'axios';
   import Loading  from 'vue-loading-overlay';
   import 'vue-loading-overlay/dist/css/index.css';
   import swal from 'sweetalert';
    
 
   const state = reactive({
        name: '',
        profession:'',
        desc:'',
        isLoading:false,
        errors:[],
   });

   const  submitForm = async()=>{
        try {
          state.isLoading = true;
            const data = {
               name:state.name,
               profession:state.profession,
               desc:state.desc,
            }
            
           const response = await axios.post('http://127.0.0.1:8000/api/addTeam',data)
           state.errors = response.data.error;
           console.log(response.data);
           if(response.data.status == true){       
             swal({
              title: 'Team Added!',
              text: 'We will contact you soon.',
              icon: 'success',
              confirmButtonText: 'OK'
            });
            state.errors = [];
             state.name = '',
             state.desc = '',
             state.profession = ''
           
           }

        } catch (error) {
           console.log(error); 
        }finally{
          state.isLoading = false;
        }
        
   }
</script>


<template>
      <Loading v-if="state.isLoading" :active="true" :is-full-page="true"/>
  <div class="container">
    <h1 class="text-center">Add Team</h1>
    <div class="row mt-4 mb-4">
      <form @submit.prevent="submitForm">
        <div class="mb-3" >
          <label for="exampleInputEmail1" class="form-label"
            >Name</label
          >
          <input type="text" class="form-control" id="name" name="name" v-model="state.name"/>
          <p class="text-danger" v-if="state.errors && state.errors.name">{{ state.errors.name[0] }}</p>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Profession</label>
          <input
            type="text"
            class="form-control"
            id="profession"
            name="profession"
            v-model="state.profession"
          />
          <p class="text-danger" v-if="state.errors && state.errors.profession">{{ state.errors.profession[0] }}</p>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Description</label
          >
          <textarea
            class="form-control"
            id="desc"
            name="desc"
            rows="3"
            v-model="state.desc"
          ></textarea>
          <p class="text-danger" v-if="state.errors && state.errors.desc">{{ state.errors.desc[0] }}</p>
        </div>

         <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Image</label
          >
           <input type="file" id="image" name="image" class="form-control">
          <p class="text-danger" v-if="state.errors && state.errors.image">{{ state.errors.image[0] }}</p>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>