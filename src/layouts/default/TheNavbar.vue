<template>
  <v-app-bar class="" color="primary" border flat rounded>
    <div>
      <router-link to="/"><v-img :src="brand" :width="48" cover /></router-link>
    </div>
    <v-app-bar-title text="" />
    <v-app-bar-nav-icon color="black" @click="isOpen = !isOpen" icon="menu"/>
  </v-app-bar>

  <v-navigation-drawer v-model="isOpen" location="right" color="secondary">
    <div class="pa-4">
      <v-list>
        <v-list-item v-for="navLink in navLinks"
                     :key="navLink.id"
                     :to="navLink.route" :active=false>
          <p class="nav-items body-text">{{ navLink.name }}</p>
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
  import {ref} from "vue";
  import brand from '@/assets/img/black-cat.svg'

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
    {
      id: 4, route: "login", name: "Login",
    },
  ]

  const isOpen = ref(false)

</script>

<style scoped>

</style>
