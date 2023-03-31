<template>
<!--  <v-sheet v-if="userData.isAuthenticated">-->


    <v-sheet class="d-flex flex-column align-center pa-4">
      <p class="text-h4 text-md-h3 text-center ma-4">{{ userData.user.name }}'s Dashboard</p>
      <p class="tbody-text text-h5 text-md-h4 ma-4">{{userData.user.email}}</p>
    </v-sheet>

    <v-container class="my-4">
      <v-row align="start" justify="center">
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-card max-width="400">
            <v-sheet color="accent">
              <v-card-title>My Domains</v-card-title>
            </v-sheet>
            <v-card-text>
              <v-list class="rounded">
                <v-list-item v-for="customerDomain in userData.customerDomains" :key="customerDomain">
                 <v-btn class="pa-2 my-2" @click="openLink(customerDomain)">
                  <small>{{ customerDomain }}</small>
                 </v-btn>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
          </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-card max-width="400">
            <v-sheet color="accent">
              <v-card-title>My Subscriptions ({{userData.stripeCustomerSubscriptions.total_count}})</v-card-title>
            </v-sheet>
            <v-card-text>
              <v-list class="rounded">
                <v-list-item v-for="customerSubscription in userData.stripeCustomerSubscriptions.data" :key="customerSubscription.id">
                  {{ customerSubscription.description }}
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" lg="3">
          <v-sheet class="d-flex flex-column align-center justify-center pa-4" color="highlight" rounded>
            <stripe-customer-portal :stripe-customer-id="userData.stripeCustomerID" class="my-4"/>
            <v-btn class="my-4" @click="toggleForm">Contact</v-btn>
          </v-sheet>

        </v-col>

        <v-col v-if="formIsActive" cols="12" md="4">
          <the-contact-form />
        </v-col>

      </v-row>
    </v-container>


</template>

<script setup>
  import StripeCustomerPortal from "@/components/StripeCustomerPortal.vue";
  import TheContactForm from "@/components/TheContactForm.vue";
  import { useUserDataStore } from "@/store/userData";
  import {onMounted, ref, watch} from "vue";

  const userData =  useUserDataStore()

  const customerSubscriptions = ref("")

  const formIsActive = ref(null)

  const toggleForm = () => {
    formIsActive.value = !formIsActive.value
  }

  const openLink = (link) => {
    window.open(link)
  }

  watch(userData,() => {customerSubscriptions.value = userData.stripeCustomerData.subscriptions})

  if (userData.isAuthenticated) {
    onMounted( async () => {
       await userData.getUserMetadata()
       await userData.getCustomerData()
    })
  }

</script>

<style scoped>

</style>
