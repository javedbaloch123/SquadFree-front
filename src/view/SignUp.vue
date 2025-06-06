
<script setup>
import axios from "axios";
import { reactive } from "vue";
import Loading from "vue-loading-overlay";
import swal from "sweetalert";

const state = reactive({
  name: "",
  email: "",
  password: "",
  errors: [],
  isLoading: false,
});

const submitForm = async () => {
  try {
    state.isLoading = true;
    const data = {
      name: state.name,
      email: state.email,
      password: state.password,
    };
    const response = await axios.post("http://127.0.0.1:8000/api/user", data);
    state.errors = response.data.error;
    console.log(response.data.status);
    
    if (response.data.status == true) {
      swal({
        title: "Registered successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
      state.errors = [];
      (state.name = ""), (state.email = ""), (state.password = "");
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
      <h1>Sign Up</h1>
      <div class="row">
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              v-model="state.name"
            />
            <p class="text-danger" v-if="state.errors && state.errors.name">
              {{ state.errors.name[0] }}
            </p>
          </div>
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