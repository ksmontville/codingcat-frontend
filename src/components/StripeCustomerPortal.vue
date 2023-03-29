<template>
  <v-form @submit.prevent="createPortalSession">
    <v-btn type="submit">
      Manage Account
    </v-btn>
  </v-form>
</template>

<script setup>
import axios from 'axios'
const props = defineProps(
  {
    stripeCustomerId: String,
  }
)

const createPortalSession = async () => {
  const response = await axios.post(`http://localhost:8000/api/customer/${props.stripeCustomerId}/create-customer-portal-session`)
  window.open(response.data)
}

</script>

<style scoped>

</style>
