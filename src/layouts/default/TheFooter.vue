<template>

  <v-footer class="pa-4 w-100" :class="mobile ? 'my-12' : 'my-0'" color="accent" rounded>
    <v-row justify="center">
      <v-col cols="12" md="4" class="d-flex justify-center">
        <small>&copy; 2023 CodingCat, LLC</small>
      </v-col>
      <v-col cols="12" md="4" class="d-flex justify-center">
        <small>Illustrations &copy; Karen Donnelly</small>
      </v-col>
    </v-row>
  </v-footer>

  <the-bottom-navbar v-if="mobile"/>

</template>

<script setup>
  import TheBottomNavbar from '@/components/TheBottomNavbar'
  import {useDisplay} from "vuetify";

  const { mobile } = useDisplay()
</script>

<style scoped>

</style>
