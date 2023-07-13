<template>

  <v-app-bar color="primary" border flat rounded>
    <router-link to="/"><v-img :src="brand" :width="48" cover type="button" name="home"/></router-link>
    <v-app-bar-title v-if="userData.isAuthenticated">Hi, {{ userData.user.name }}!</v-app-bar-title>
    <v-app-bar-title v-else text="" />
    <v-app-bar-nav-icon color="black" v-if="mobile" @click="toggleDrawer" type="button" name="menu button"/>


<!--    Desktop navlinks -->
    <v-container v-if="!mobile" class="w-50">
      <v-row align="center" justify="center" dense>
        <v-col v-for="navLink in navLinks.slice(0,4)" :key="navLink.id">
          <v-btn :to="navLink.route" variant="outlined" size="small"
                  color="accent" type="button" :text="navLink.name" />
        </v-col>
        <v-col v-if="userData.isAuthenticated">
          <v-btn color="secondary" to="dashboard" variant="flat" size="small">Dashboard</v-btn>
        </v-col>
        <v-col>
          <v-btn v-if="userData.isAuthenticated" color="secondary" @click="userData.logout" variant="flat" size="small">Logout</v-btn>
          <v-btn v-else color="secondary" @click="userData.loginWithRedirect" variant="flat" size="small">Login/Register</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

<!--  Mobile navlinks -->
  <v-navigation-drawer v-if="mobile" v-model="drawer" location="right" color="secondary">
    <div class="pa-8">
      <v-list>
        <v-list-item :to="navLinks[4].route" type="button">
          Dashboard
        </v-list-item>
        <v-list-item v-if="userData.isAuthenticated" @click="userData.logout" type="button">
          Log Out
        </v-list-item>
        <v-list-item v-else @click="userData.loginWithRedirect" type="button">
          Login/Register
        </v-list-item>
        <v-divider color="primary" thickness="4"/>
        <v-list-item v-for="navLink in navLinks.slice(0,4)"
                     :key="navLink.id"
                     :to="navLink.route" :active=false type="button">
          <p class="nav-items body-text">{{ navLink.name }}</p>
        </v-list-item>
      </v-list>
    </div>

  </v-navigation-drawer>

</template>

<script setup>
  import {ref} from "vue";
  import {useDisplay} from "vuetify";
  import {useUserDataStore} from "@/store/userData";
  import brand from '@/assets/img/black-cat.svg'


  const { mobile } = useDisplay()
  const userData = useUserDataStore()
  const drawer = ref(null)
  const toggleDrawer = () => {
    drawer.value = !drawer.value
  }

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
      id: 5, route: "login", name: "Login/Register",
    },
  ]

</script>

<style scoped>

</style>
