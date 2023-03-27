<template>

  <v-sheet v-if="consultFormActive" class="my-4" rounded>
    <v-form v-model="form" class="d-flex flex-column justify-center" validate-on="submit" @submit.prevent="sendEmail">
      <input type="hidden" :value="to_name" name="to_name">
      <v-text-field bg-color="" label="Name" v-model="from_name" name="from_name" :rules="rules"/>
      <v-text-field bg-color="" label="Email" v-model="from_email" name="from_email" :rules="rules"/>

      <v-select v-model="packages" name="packages" multiple chips closable-chips clear-icon="mdi-close" bg-color="secondary"
                :items="formItems"
                label="Select packages you are interested in"  />

      <p class="body-text text-body-2 pa-4">{{ datePickerText }}</p>

      <v-sheet>
        <VueDatePicker class="my-2" v-model="date_one" name="date_one"/>
        <VueDatePicker class="my-2" v-model="date_two" name="date_two"/>
        <VueDatePicker class="my-2" v-model="date_three" name="date_three"/>
      </v-sheet>

      <p class="body-text text-body-2 pa-4">{{ messageText }}</p>
      <v-textarea v-model="message" label="Budget, deadlines, features, etc..." name="message" :rules="rules"/>
      <v-btn color="highlight" class="align-self-center my-4" type="submit">Submit</v-btn>
    </v-form>
  </v-sheet>

  <v-sheet v-else class="body-text text-h5 ma-4 pa-4" rounded>

  {{ messageSent }}

  </v-sheet>

</template>

<script setup>
import {reactive, ref} from "vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import emailjs from "@emailjs/browser";

const consultFormActive = ref(true)
const datePickerText = "Select up to three dates in which you are available for a one-hour window."
const messageText = "Please include any other details that we should know."
const messageSent = "Thank you for your interest in CodingCat! We'll check our schedule and get back to you as soon as possible."

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateID = import.meta.env.VITE_EMAILJS_CONSULT_FORM_TEMPLATE_ID

const form = ref("")
const formItems = ["Basic", "Extra", "Premium", "Other"]

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
const packages = ref([])
const date_one = ref("")
const date_two = ref("")
const date_three=ref("")
const message = ref(null)
//EMAILJS TEMPLATE VARIABLES


const toggleConsultForm = () => {
  consultFormActive.value = false
}

const sendEmail = () => {

  if (from_name.valueOf && from_email.valueOf && message.value && packages.value) {
    emailjs.sendForm(serviceID, templateID, "form", publicKey)
    toggleConsultForm()
  }
}


</script>

<style scoped>

</style>
