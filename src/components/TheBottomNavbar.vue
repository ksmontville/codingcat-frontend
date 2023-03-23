<template>

  <v-bottom-navigation horizontal grow>
    <v-btn v-for="footerLink in footerLinks" :key="footerLink.id" :to="footerLink.route">
      <v-icon :icon="footerLink.icon" />
      {{ footerLink.name }}
    </v-btn>
  </v-bottom-navigation>

</template>

<script setup>

  const footerLinks = [
    // {
    //   id: 0, route: "/", name: "Home",
    // },
    {
      id: 1, route: "about", name: "About", icon: "person",
    },
    {
      id: 2, route: "pricing", name: "Pricing", icon: "savings",
    },
    {
      id: 3, route: "contact", name: "Contact", icon: "chat",
    },
    {
      id: 4, route: "login", name: "Login", icon: "login",
    },
  ]

</script>

<style scoped>

</style>
