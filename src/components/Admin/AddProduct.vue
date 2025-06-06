<script setup>
import { reactive } from "vue";
import axios from "axios";
import Loading from "vue-loading-overlay";
import 'vue-loading-overlay/dist/css/index.css';
import swal from "sweetalert";

const state = reactive({
  name: "",
  client: "",
  desc: "",
  start_date: "",
  deliever_date: "",
  isLoading: false,
  errors: [],
});

const submitForm = async () => {
  state.isLoading = true;
  try {
    const data = {
      name: state.name,
      client: state.client,
      desc: state.desc,
      start_date: state.start_date,
      deliever_date: state.deliever_date,
    };
  
    const response = await axios.post(
      "http://127.0.0.1:8000/api/addProduct",
      data
    );
    state.errors = response.data.error;
     if(response.data.status == true){       
             swal({
              title: 'Project Added!',
              text: 'We will contact you soon.',
              icon: 'success',
              confirmButtonText: 'OK'
            });
            state.errors = [];
             state.name = '',
             state.desc = '',
             state.client = '',
             state.start_date = '',
             state.deliever_date = ''
           
           }
  } catch (error) {
    console.log(error);
  } finally {
    state.isLoading = false;
  }
};
</script>


<template>
    <Loading v-if="state.isLoading" :active="true" :is-full-page="true"/>
  <div class="container">
    <h1 class="text-center">Add Products</h1>
    <div class="row mt-4 mb-4">
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            v-model="state.name"
          />
           <p
            class="text-danger"
            v-if="state.errors && state.errors.name"
          >
            {{ state.errors.name[0] }}
          </p>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">client</label>
          <input
            type="text"
            class="form-control"
            id="client"
            name="client"
            v-model="state.client"
          />
           <p
            class="text-danger"
            v-if="state.errors && state.errors.client"
          >
            {{ state.errors.client[0] }}
          </p>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label"
            >Start Date</label
          >
          <input
            type="date"
            class="form-control"
            id="start_date"
            name="start_date"
            v-model="state.start_date"
            
          />
           <p
            class="text-danger"
            v-if="state.errors && state.errors.start_date"
          >
            {{ state.errors.start_date[0] }}
          </p>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">End Date</label>
          <input
            type="date"
            class="form-control"
            id="deliever_date"
            name="deliever_date"
            v-model="state.deliever_date"
          />
          <p
            class="text-danger"
            v-if="state.errors && state.errors.deliever_date"
          >
            {{ state.errors.deliever_date[0] }}
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

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Image</label
          >
          <input type="file" id="image" name="image" class="form-control" />
           <p class="text-danger" v-if="state.errors && state.errors.image">
            {{ state.errors.image[0] }}
          </p>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>