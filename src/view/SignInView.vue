
<script setup>
import axios from "axios";
import { reactive } from "vue";
import Loading from "vue-loading-overlay";
import swal from "sweetalert";
import router from "@/router";

const state = reactive({
  
  email: "",
  password: "",
  errors: [],
  isLoading: false,
});

const submitForm = async () => {
  try {
    state.isLoading = true;
    const data = {
      
      email: state.email,
      password: state.password,
    };
    const response = await axios.post("http://127.0.0.1:8000/api/login", data);
    state.errors = response.data.error;
    console.log(response.data.status);
    
    if (response.data.status == true) {
      swal({
        title: "Login successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
      state.errors = [];
       (state.email = ""), (state.password = "");
       router.push({path: '/'});

    }else if(response.data.status == 'invalid'){
        swal({
        title: "Invalid credentials",
        icon: "error",
        confirmButtonText: "OK",
      });
    }

  } catch (error) {
  } finally {
    state.isLoading = false;
  }
};
</script>



<template>
  <Loading v-if="state.isLoading" :active="true" :is-full-page="true" />
  <div class="page-title accent-background">
    <div class="container position-relative">
      <h1 data-aos="zoom-in" data-aos-delay="200" >Sign In</h1>
      <div class="row" data-aos="fade-up" data-aos-delay="100">
        <form @submit.prevent="submitForm">
          
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              v-model="state.email"
            />
            <p class="text-danger" v-if="state.errors && state.errors.email">
              {{ state.errors.email[0] }}
            </p>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              v-model="state.password"
            />
            <p class="text-danger" v-if="state.errors && state.errors.password">
              {{ state.errors.password[0] }}
            </p>
          </div>
          
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>



<style scoped>
.row {
  display: flex;
  justify-content: center;
  align-content: center;
}

.row form {
  width: 50%;
}

.row form label {
  display: flex;
}
</style>