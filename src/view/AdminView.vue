<script setup>
import { ref } from "vue";
import AddService from '../components/Admin/AddService.vue'
import Products from '../components/Admin/Products.vue'
import Service from "@/components/Admin/Service.vue";
import AddProduct from "@/components/Admin/AddProduct.vue";
import AddTeam from "@/components/Admin/AddTeam.vue";
import Team from "@/components/Admin/Team.vue";
import { RouterLink } from "vue-router";

const activeSection = ref('services')
</script>

<template>
       
     <div class="page-title accent-background">
      <div class="container position-relative">
        <h1>Welcome to Administerator</h1>
        <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
        <nav class="breadcrumbs">
          <ol>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li class="current" @click="activeSection = 'services'">Services</li>
            <li class="current" @click="activeSection = 'products'">Projects</li>
            <li class="current" @click="activeSection = 'team'">Team</li>
          </ol>
        </nav>
      </div>
    </div>

    <Service v-if="activeSection == 'services'">
       <button class="btn btn-primary mb-3" @click="activeSection = 'addService'">Add Service</button>
    </Service>
    <Products v-if="activeSection == 'products'">
       <button class="btn btn-primary mb-3" @click="activeSection = 'addProduct'">Add Products</button>
    </Products>
    <Team v-if="activeSection == 'team'">
       <button class="btn btn-primary mb-3" @click="activeSection = 'addTeam'">Add Team Member</button>
    </Team>

    <AddService v-if="activeSection == 'addService'"/>
    <AddProduct v-if="activeSection == 'addProduct'"/>
    <AddTeam v-if="activeSection == 'addTeam'"/>
</template>


<style>
  a{
    color: white;
  }

  .current{
    color: white;
    cursor: pointer;
  }
  .current:hover{
     color: antiquewhite;
  }
</style>