<template>
  <v-form @submit.prevent="createPortalSession">
    <v-btn type="submit" name="submit">
      Manage Account
    </v-btn>
  </v-form>
</template>

<script setup>
import axios from 'axios'
import {useUserDataStore} from "@/store/userData";
const props = defineProps(
  {
    stripeCustomerId: String,
  }
)
const userData = useUserDataStore()

const createPortalSession = async () => {
  const token = await userData.getAccessToken()
  const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/customer/${props.stripeCustomerId}/create-customer-portal-session`,
    {
      customer_id: props.stripeCustomerId
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
  window.open(response.data)
}

</script>

<style scoped>

</style>
