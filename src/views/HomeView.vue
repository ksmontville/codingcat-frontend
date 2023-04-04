<template>

  <v-container fluid>
    <v-row>
      <v-col>
        <the-hero />
      </v-col>
    </v-row>

    <v-divider color="secondary" :thickness="mobile? 4 : 12" rounded />

    <v-row align="baseline" justify="center">
      <v-col md="12">
        <the-solutions />
      </v-col>

      <v-divider color="secondary" :thickness="mobile? 4 : 12" rounded />

      <v-col cols="12" md="6" class="my-4">
        <the-services />
      </v-col>

      <v-col cols="12" md="6">
         <the-testimonials />
      </v-col>

    </v-row>

  </v-container>



</template>

<script setup>
  import TheHero from '@/components/TheHero'
  import TheSolutions from "@/components/TheSolutions.vue";
  import TheServices from '@/components/TheServices'
  import TheTestimonials from '@/components/TheTestimonials'
  import {useDisplay} from "vuetify";

  const { mobile } = useDisplay()

</script>


<style scoped>


</style>
