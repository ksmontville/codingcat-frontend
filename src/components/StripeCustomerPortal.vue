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
  const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/customer/${props.stripeCustomerId}/create-customer-portal-session`,
    // {
    //   customer_id: props.stripeCustomerId
    // },
    {
      headers: {
        Authorization: `Bearer ${userData.managementToken}`
      }
    }
  )
  window.open(response.data)
}

</script>

<style scoped>

</style>
