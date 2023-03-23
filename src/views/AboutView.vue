<template>

  <v-sheet class="text-h2 text-center pa-4 my-4">
    {{ aboutTitle }}
  </v-sheet>

  <v-sheet class="pa-2 my-4">
    <the-about-card />
  </v-sheet>

</template>


<script setup>
import TheAboutCard from '@/components/TheAboutCard'

const aboutTitle = "About CodingCat"

</script>


<style>


</style>
