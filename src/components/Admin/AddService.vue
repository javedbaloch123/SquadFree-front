
<script setup>
   import { reactive } from 'vue';
   import axios from 'axios';
   import Loading from 'vue-loading-overlay';
   import 'vue-loading-overlay/dist/css/index.css';
   import swal from 'sweetalert';
 
   const state = reactive({
        name: '',
        subtitle:'',
        desc:'',
        isLoading:false,
        errors:[],
   });

   const  submitForm = async()=>{
        try {
           state.isLoading = true;
            const data = {
               name:state.name,
               subtitle:state.subtitle,
               desc:state.desc,
            }
           
           const response = await axios.post('http://127.0.0.1:8000/api/addService',data)
           if(response.data.status == false){
             state.errors = response.data.error;
           }else {
             swal({
              title: 'Service Added!',
              text: 'We will contact you soon.',
              icon: 'success',
              confirmButtonText: 'OK'
            });
            state.errors = [];
             state.name = '',
             state.desc = '',
             state.subtitle = ''
           }
           

        } catch (error) {
           console.log(error); 
        }finally{
          state.isLoading = false;
        }
        
   }
</script>

<template>
    <Loading :active="state.isLoading" :is-full-page="true"/>
  <div class="container">
    <h1 class="text-center">Add Service</h1>
    <div class="row mt-4 mb-4">
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Service Name</label
          >
          <input type="text" class="form-control" id="name" name="name" v-model="state.name"/>
          <p class="text-danger" v-if="state.errors && state.errors.name">
            {{ state.errors.name[0] }}
          </p>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Subtitle</label>
          <input
            type="text"
            class="form-control"
            id="subtitle"
            name="subtitle"
            v-model="state.subtitle"
          />
           <p class="text-danger" v-if="state.errors && state.errors.subtitle">
            {{ state.errors.subtitle[0] }}
          </p>
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
           <p class="text-danger" v-if="state.errors && state.errors.desc">
            {{ state.errors.desc[0] }}
          </p>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>