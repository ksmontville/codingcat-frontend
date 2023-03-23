<template>
  <v-sheet color="" class="d-flex flex-column justify-center align-center pa-2">
    <p class="text-h4 ma-4">Satisfied Cat-stomers</p>
    <v-card class="my-4 pa-4" max-width="800" v-for="testimonial in testimonials" variant="elevated" color="primary" rounded border>
      <v-card-title>{{ testimonial.title }}</v-card-title>
      <v-card-subtitle>{{ testimonial.subtitle }}</v-card-subtitle>
      <v-card-text class="text-body-2">
        <p class="body-text">{{ testimonial.text }}</p>
      </v-card-text>
      <v-rating v-model="testimonial.rating" color="secondary" half-increments readonly />
      <v-card-actions class="">
        <v-btn @click="openLink(testimonial.link)" color="secondary">See Website</v-btn>
      </v-card-actions>
      </v-card>
  </v-sheet>

</template>

<script setup>

  import {reactive} from "vue";

  const testimonials = reactive([
    {title: "Tony from New Hampshire", subtitle: "Black Moon Games",
      text: "CodingCat whipped up an attractive and user friendly site that greatly improved my traffic and customer engagement!",
      image: "./src/assets/img/black-moon-games-landing-page-800.png",
      rating: 4.5,
      link: "https://www.black-moon-games.com"
    }
  ])

  const openLink = (link) => {
    window.open(link)
  }

</script>

<style scoped>

</style>
