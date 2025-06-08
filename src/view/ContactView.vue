<script setup>
  import Hero from '../components/Hero.vue'
  import { reactive } from 'vue';
  import Loading from 'vue-loading-overlay';
  import axios from 'axios';

   const state = reactive({
        name: '',
        email:'',
        subject:'',
        message:'',
        isLoading:false,
        errors:[],
   });

   const  submitForm = async()=>{
        try {
          state.isLoading = true;
            const data = {
               name:state.name,
               email:state.email,
               subject:state.subject,
               message:state.message,
            }
            
           const response = await axios.post('http://127.0.0.1:8000/api/contact',data)
           state.errors = response.data.error;
           console.log(response.data);
           if(response.data.status == true){       
             swal({
              title: 'Message Sent Successfully!',
              text: 'We will contact you soon.',
              icon: 'success',
              confirmButtonText: 'OK'
            });
            state.errors = [];
             state.name = '',
             state.email = '',
             state.subject = ''
             state.message = ''
           
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
     <Hero title="Contact Us" id="contact"/>
     <section id="contact" class="contact section">
      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4">

          <div class="col-lg-5">

            <div class="info-wrap">
              <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i class="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div><!-- End Info Item -->

              <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i class="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55</p>
                </div>
              </div><!-- End Info Item -->

              <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i class="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>info@example.com</p>
                </div>
              </div><!-- End Info Item -->

              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameborder="0" style="border:0; width: 100%; height: 270px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <div class="col-lg-7">
            <form  @submit.prevent="submitForm" data-aos="fade-up" data-aos-delay="200">
              <div class="row gy-4">

                <div class="col-md-6">
                  <label for="name-field" class="pb-2">Your Name</label>
                  <input type="text" name="name" id="name-field" class="form-control" v-model="state.name">
                   <p class="text-danger" v-if="state.errors && state.errors.name">{{ state.errors.name[0] }}</p>
                </div>

                <div class="col-md-6">
                  <label for="email-field" class="pb-2">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email-field" v-model="state.email">
                   <p class="text-danger" v-if="state.errors && state.errors.email">{{ state.errors.email[0] }}</p>
                </div>

                <div class="col-md-12">
                  <label for="subject-field" class="pb-2">Subject</label>
                  <input type="text" class="form-control" name="subject" id="subject-field" v-model="state.subject">
                   <p class="text-danger" v-if="state.errors && state.errors.subject">{{ state.errors.subject[0] }}</p>
                </div>

                <div class="col-md-12">
                  <label for="message-field" class="pb-2">Message</label>
                  <textarea class="form-control" name="message" rows="10" id="message-field" v-model="state.message"></textarea>
                   <p class="text-danger" v-if="state.errors && state.errors.message">{{ state.errors.message[0] }}</p>
                </div>

                <div class="col-md-12 text-center">
                  <button class="btn btn-primary" type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div><!-- End Contact Form -->

        </div>

      </div>

    </section>
</template>