<template>


  <p v-if="userData.isAuthenticated">{{ userData.user.name }}'s Dashboard</p>

  <p v-else>Please login or register to continue.</p>

</template>

<script setup>
  import { useUserDataStore } from "@/store/userData";

  const userData =  useUserDataStore()

</script>

<style scoped>

</style>
