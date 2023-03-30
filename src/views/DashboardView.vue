<template>
  <v-sheet v-if="userData.isAuthenticated">

    {{ userData.user.name }}'s Dashboard

    <p>{{userData.user.email}}</p>

    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>My Domains</v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item v-for="customerDomain in userData.customerDomains" :key="customerDomain">
                  <a :href="customerDomain" target="_blank">{{ customerDomain }}</a>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
          </v-col>
        <v-col>
          <v-card>
            <v-card-title>My Subscriptions ({{customerSubscriptions.total_count}})</v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item v-for="customerSubscription in customerSubscriptions.data" :key="customerSubscription.id">
                  {{ customerSubscription.description }}
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-sheet>
            <stripe-customer-portal :stripe-customer-id="userData.stripeCustomerID"/>
          </v-sheet>

        </v-col>

      </v-row>
    </v-container>

  </v-sheet>


  <v-sheet v-else>Please login or register to continue.</v-sheet>

</template>

<script setup>
  import StripeCustomerPortal from "@/components/StripeCustomerPortal.vue";
  import { useUserDataStore } from "@/store/userData";
  import {onMounted, ref, watch} from "vue";

  const userData =  useUserDataStore()

  const customerSubscriptions = ref("")


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
