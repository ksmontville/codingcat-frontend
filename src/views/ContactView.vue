<template>

  <v-container fluid>

    <v-row align="start" justify="center">

      <v-col cols="12">

        <v-sheet class="pa-4">
          <p class="text-h2 text-center">{{ contactTitle }}</p>
          <p class="body-text text-body-1 my-8">
          CodingCat operates remotely from the San Francisco Bay Area, but we are capable and excited to begin
          serving businesses from any part of the United States.</p>
        </v-sheet>
      </v-col>

      <v-col cols="12" md="6" class="d-flex justify-center mx-auto">
        <v-card class="" min-width="300" max-width="400" >
          <v-card-title class="body-text text-h5 pa-4">CodingCat, LLC</v-card-title>
            <v-card-text class="pa-4">
              <v-list class="rounded-lg body-text text-body-1 pa-2">
                <v-list-item v-for="index in contactInfo" :key="index">
                  {{ index }}
                </v-list-item>
              </v-list>
            </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" class="d-flex justify-center mx-auto">
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
const contactInfo = ["2108 N ST", "STE 4789", "Sacramento, CA 95816", "(415) 780-1083", "meow@codingcat.io"]

</script>

<style scoped>

</style>
