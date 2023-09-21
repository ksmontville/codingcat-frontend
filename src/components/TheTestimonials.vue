<template>
  <v-sheet color="white" class="d-flex flex-column justify-center align-center">
    <p class="text-h4 body-text text-center">Satisfied Cat-stomers</p>

    <v-row justify="center">
      <v-col v-for="testimonial in testimonials" :key="testimonial.title" md="6">
        <v-card class="my-4 mx-auto pa-4" max-width="364" variant="elevated" color="primary" rounded border>
          <v-img :src="testimonial.image" height="256" />
          <v-card-title class="text-center">
            <v-btn class="my-2 text-decoration-underline" size="large" @click="openLink(testimonial.link)" color="secondary" variant="text" type="button">
              {{ testimonial.title }}
            </v-btn>
          </v-card-title>

          <v-row align="center" justify="center">
            <v-col cols="12" class="text-center">
              <v-rating v-model="testimonial.rating" color="secondary" half-increments readonly />
            </v-col>
            <v-col class="text-center">
              <v-btn variant="text" color="secondary" @click="testimonial.isShowing = !testimonial.isShowing">Full Review</v-btn>
            </v-col>
          </v-row>

          <v-expand-transition>
            <v-card class="" elevation="0" v-if="testimonial.isShowing" fluid color="transparent">
              <v-card-text class="text-body-2">
                <p class="body-text">{{ testimonial.text }}</p>
                <v-card-subtitle class="my-4">-- {{ testimonial.subtitle }}</v-card-subtitle>
              </v-card-text>
            </v-card>
          </v-expand-transition>

        </v-card>
      </v-col>
    </v-row>
  </v-sheet>

</template>

<script setup>
  import {reactive} from "vue";
  import srhcLogo from '@/assets/img/srhc-logo-dark.png'
  import bmgLogo from '@/assets/img/blackmoongames-logo.png'

  const testimonials = reactive([
    {
      title: "South Royalton Health Center",
      subtitle: "Ashley from Vermont",
      text: "Working with Kyle has been such a pleasure, he has an intuitive sense for what works on the web. " +
        "I was able to give him some ideas, describe what I liked, and he ran with it, producing an excellent website " +
        "that is aesthetically pleasing and fits all our needs.  He understood the importance of security and HIPAA " +
        "compliance for a medical office, and was able to direct our change over of email services and online form " +
        "hosting as well. He was very upfront and descriptive about the budget and stuck with what he quoted. " +
        "He made sure the transition happened seamlessly and after hours so it wouldn't affect our patient care. " +
        "He also has been easy to get a hold of since the initial set up to make edits/additions as our practice continues to evolve. " +
        "I would highly recommend Kyle to anyone looking to create a website or redesign their current one. " +
        "Switching from a megacorporation to a small business was a great move!",
      image: srhcLogo,
      rating: 5.0,
      link: "https://srhealthcenter.com",
      isShowing: false,
    },
    {
      title: "Black Moon Games",
      subtitle: "Tony from New Hampshire",
      text: "CodingCat whipped up an attractive and user friendly site that greatly improved my traffic and customer engagement!",
      image: bmgLogo,
      rating: 4.5,
      link: "https://www.black-moon-games.com",
      isShowing: false,
    },
  ])

  const openLink = (link) => {
    window.open(link)
  }

</script>

<style scoped>

</style>
