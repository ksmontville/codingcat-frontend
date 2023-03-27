<template>


  <p v-if="user.isAuthenticated">Dashboard here</p>

  <p v-else>Please login or register to continue.</p>

</template>

<script setup>
  import { useUserStore } from "@/store/user";

  const user =  useUserStore()

</script>

<style scoped>

</style>
