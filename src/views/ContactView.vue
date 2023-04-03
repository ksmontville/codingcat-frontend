<template>

  <v-sheet class="pa-4">
    <p class="text-h2 text-center my-8">{{ contactTitle }}</p>
    <p class="body-text text-body-1 my-4">
    CodingCat operates remotely from the San Francisco Bay Area, but we are capable and excited to begin
    serving businesses from any part of the United States.</p>
  </v-sheet>

  <v-container>

    <v-row align="start" justify="center">
      <v-col class="d-flex justify-center" sm="12" md="4">
        <v-card class="" min-width="300" max-width="400" >
          <v-card-title class="body-text text-h5 pa-4">CodingCat, LLC</v-card-title>
            <v-card-text class="pa-4">
              <v-list class="rounded-lg body-text text-body-1 pa-2">
                <v-list-item v-for="index in contactInfo">
                  {{ index }}
                </v-list-item>
              </v-list>
            </v-card-text>
        </v-card>
      </v-col>

      <v-col class="d-flex justify-center" sm="12" md="8">
        <v-card max-width="600" >
          <v-card-title class="body-text text-h5 pa-4">Let's Chat</v-card-title>
            <v-card-text class="pa-4">
              <p class="body-text text-body-1">For pricing estimates, customer service requests, and all other inquiries.</p>
              <the-contact-form />
            </v-card-text>
          </v-card>
        </v-col>

   </v-row>

 </v-container>

</template>

<script setup>
import TheContactForm from '@/components/TheContactForm'

const contactTitle = "Contact"
const contactInfo = ["2108 N ST", "STE 4789", "Sacramento, CA 95816", "(415) 429-5783", "meow@codingcat.io"]

</script>

<style scoped>

</style>
