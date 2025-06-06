<script setup>
    import { RouterLink, useRoute} from "vue-router";
     
     
     const ActiveLink = (path) =>{
        const route = useRoute();
        return route.path === path;
     }
</script>

<template>
   <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <RouterLink to="/" class="logo d-flex align-items-center">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1 class="sitename">Squadfree</h1>
      </RouterLink>

      <nav id="navmenu" class="navmenu">
        
        <ul>

          <li><RouterLink to="/" :class="[ActiveLink('/') ? 'active' : '']">Home</RouterLink></li>
          <li><RouterLink to="/About" :class="[ActiveLink('/About') ? 'active' : '']">About</RouterLink></li>
          <li><RouterLink to="/Services" :class="[ActiveLink('/Services') ? 'active' : '']">Services</RouterLink></li>
          <li><RouterLink to="/Portfolio" :class="[ActiveLink('/Portfolio') ? 'active' : '']">Portfolio</RouterLink></li>
          <li><RouterLink to="/Team" :class="[ActiveLink('/Team') ? 'active' : '']">Team</RouterLink></li>
          <li><RouterLink to="/Faqs" :class="[ActiveLink('/Faqs') ? 'active' : '']">FAQs</RouterLink></li>
         
          <li><RouterLink to="/Contact" :class="[ActiveLink('/Contact') ? 'active' : '']">Contact</RouterLink></li>
          <li><RouterLink to="/Login" class="btn btn-warning">Sign In</RouterLink></li>
          <li><RouterLink to="/Register" class="btn btn-warning">Sign Up</RouterLink></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

    </div>
  </header>
</template>