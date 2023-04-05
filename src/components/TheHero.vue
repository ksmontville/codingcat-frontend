<template>

  <v-container class="my-8">

    <v-row align="center" justify="center">

      <v-col cols="12" md="6" :class="{'text-center': mobile }">
        <p class="hero-text text-h2 text-md-h1">{{ heroText }}</p>
        <p class="hero-subtext text-overline text-md-h2 mt-8">{{ heroSubText }}</p>
      </v-col>

      <v-col cols="12" md="6">
        <v-img class="mx-auto" :src="heroImage" :width="heroImage.width" :height="heroImage.height"
               max-width="500" alt="CodingCat logo."/>
      </v-col>
    </v-row>

  </v-container>

</template>

<script setup>
import heroImage from '@/assets/img/codingcatlogo.jpg'
import {useDisplay} from "vuetify";

const { mobile } = useDisplay()

const heroText = "CodingCat"
const heroSubText = "Designer web solutions purrrfect for your small business."

</script>

<style scoped>

.hero-subtext {
  color: #14274E;
}


</style>
