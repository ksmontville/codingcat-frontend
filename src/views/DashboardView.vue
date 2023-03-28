<template>


  <p v-if="userData.isAuthenticated">{{ userData.user.name }}'s Dashboard


      My Subscriptions
      {{ subscriptions }}

  </p>

  <p v-else>Please login or register to continue.</p>

</template>

<script setup>
  import {ref} from "vue";
  import axios from 'axios'
  import { useUserDataStore } from "@/store/userData";
  import {useAuth0} from "@auth0/auth0-vue";
  const userData =  useUserDataStore()

  const subscriptions = ref("")

  const { getAccessTokenSilently } = useAuth0()
  const getData = async () => {
    const token = await getAccessTokenSilently();
    const response = await axios.get("https://codingcatllc.us.auth0.com/api/v2/users/google-oauth2|106996953159648136381", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const data = response.data
    console.log(data)
  }

  getData()

</script>

<style scoped>

</style>
