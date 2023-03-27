<template>

  <v-bottom-navigation v-if="user.isAuthenticated" horizontal grow>
    <v-btn v-for="footerLink in footerLinks.slice(0, 2)" :key="footerLink.id" :to="footerLink.route" @click="footerLink.click">
      <v-icon :icon="footerLink.icon" />
      {{ footerLink.name }}
    </v-btn>

<!--    <v-btn v-if="user.isAuthenticated" @click="footerLinks[1].click">-->
<!--      <v-icon :icon="footerLinks[1].icon" />-->
<!--      Log Out-->
<!--    </v-btn>-->
  </v-bottom-navigation>

  <v-bottom-navigation v-else>
      <v-btn @click="footerLinks[2].click">
        <v-icon :icon="footerLinks[2].icon" />
        Log In
      </v-btn>
  </v-bottom-navigation>

</template>

<script setup>
  import {useUserStore} from "@/store/user";

  const user = useUserStore()

  const footerLinks = [
    // {
    //   id: 0, route: "/", name: "Home",
    // },
    // {
    //   id: 1, route: "about", name: "About", icon: "person",
    // },
    // {
    //   id: 2, route: "pricing", name: "Pricing", icon: "savings",
    // },
    // {
    //   id: 3, route: "contact", name: "Contact", icon: "chat",
    // },
    {
      id: 0, route: "dashboard", name: "Dashboard", icon: "dashboard"
    },
    {
      id: 1, route: "/", name: "Log Out", icon: "logout", click: user.logout
    },
    {
      id: 2, route: "login", name: "Log In", icon: "login", click: user.loginWithRedirect
    },
  ]

</script>

<style scoped>

</style>
