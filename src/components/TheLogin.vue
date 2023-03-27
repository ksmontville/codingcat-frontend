<template>

  <v-btn v-if="isAuthenticated" @click="logout">Log Out</v-btn>
  <v-btn v-else @click="loginWithRedirect">Log In</v-btn>

</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

</script>

<style scoped>

</style>
