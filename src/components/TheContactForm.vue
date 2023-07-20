<template>

  <v-sheet v-if="contactFormActive" class="my-4" rounded>
    <v-form v-model="form" class="d-flex flex-column" validate-on="submit" @submit.prevent="sendEmail">
      <input type="hidden" :value="to_name" name="to_name">
      <v-text-field bg-color="" label="Name" v-model="from_name" name="from_name" :rules="rules"/>
      <v-text-field bg-color="" label="Email" v-model="from_email" name="from_email" :rules="rules"/>
      <v-textarea bg-color="" label="How can we help you?" v-model="message" name="message" :rules="rules"/>
      <v-btn color="highlight" class="align-self-center my-4" type="submit">Submit</v-btn>

    </v-form>
  </v-sheet>

  <v-sheet v-else class="body-text text-h5 ma-4 pa-4" rounded>
    {{ messageSent }}
  </v-sheet>


</template>

<script setup>
import {ref} from "vue";
import emailjs from "@emailjs/browser";

const contactFormActive = ref(true)
const messageSent = "Thanks for your message, you'll hear from us soon!"

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateID = import.meta.env.VITE_EMAILJS_CONTACT_FORM_TEMPLATE_ID

const form = ref("")
const rules = [
    value => {
    if (value) {
      return true
    }
    else return "Field cannot be blank."
    }
  ]


//EMAILJS TEMPLATE VARIABLES
const to_name = "CodingCat"
const from_name = ref(null)
const from_email = ref(null)
const message = ref(null)
//EMAILJS TEMPLATE VARIABLES


const toggleContactForm = () => {
  contactFormActive.value = false
}

const sendEmail = () => {

  if (from_name.value && from_email.value && message.value) {
    emailjs.sendForm(serviceID, templateID, "form", publicKey)
    toggleContactForm()
  }
}

</script>

<style scoped>

</style>
