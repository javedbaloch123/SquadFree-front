<script setup>
    import { defineProps } from 'vue';

    defineProps({
      title:{
        type:String,
        default:"Welcome to Squad"
      },
      id:{
        type:String,
        default:'',
      }
    })
</script>


<template>
     <section id="hero" class="hero section accent-background">

      <img src="/assets/img/hero-bg.jpg" alt="" data-aos="fade-in">

      <div class="container text-center" data-aos="fade-up" data-aos-delay="100">
        <h2>{{ title }}</h2>
        <p>We are team of talented designers making websites with Clean Code</p>
        <a :href="'#'+id" class="btn-scroll" title="Scroll Down"><i class="bi bi-chevron-down"></i></a>
      </div>

    </section>
</template>