 <script setup>
   import Navbar from "./components/Navbar.vue";
   import Hero from "./components/Hero.vue";
   import Footer from './components/Footer.vue';
    import { RouterView } from "vue-router";
 </script>
 
 <template>
    <Navbar/>
    <RouterView/>
    <Footer />
 </template>