<template>
  <v-app-bar class="" color="primary" border flat rounded>
    <router-link to="/"><v-img :src="brand" :width="48" cover /></router-link>
    <v-app-bar-title v-if="user.isAuthenticated">Hi, {{ user.user.name }}!</v-app-bar-title>
    <v-app-bar-title v-else text="" />
  <v-app-bar-nav-icon color="black" @click="isOpen = !isOpen" icon="menu"/>
  </v-app-bar>

  <v-navigation-drawer v-model="isOpen" location="right" color="secondary">
    <div class="pa-4">
      <v-list>
        <v-list-item v-for="navLink in navLinks.slice(0,4)"
                     :key="navLink.id"
                     :to="navLink.route" :active=false>
          <p class="nav-items body-text">{{ navLink.name }}</p>
        </v-list-item>

          <v-list-item v-if="user.isAuthenticated" :to="navLinks[4].route">
<!--            <v-icon :icon="navLinks[4].icon" />-->
            Dashboard
          </v-list-item>

        <v-list-item v-else :to="navLinks[5].route">
<!--          <v-icon :icon="footerLinks[4].icon" />-->
          Log In
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
  import {ref} from "vue";
  import {useUserStore} from "@/store/user";
  import brand from '@/assets/img/black-cat.svg'

  const user = useUserStore()



  const navLinks = [
    {
      id: 0, route: "/", name: "Home",
    },
    {
      id: 1, route: "about", name: "About",
    },
    {
      id: 2, route: "pricing", name: "Pricing",
    },
    {
      id: 3, route: "contact", name: "Contact",
    },
    {id: 4, route: "dashboard", name: "Dashboard"},
    {
      id: 5, route: "login", name: "Login",
    },
  ]

  const isOpen = ref(false)

</script>

<style scoped>

</style>
