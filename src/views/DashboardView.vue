<template>
  <v-sheet class="d-flex flex-column align-center pa-4">
    <p class="text-h4 text-md-h3 text-center ma-4">{{ userData.user.name }}'s Dashboard</p>
    <p class="tbody-text text-h5 text-md-h4 ma-4">{{userData.user.email}}</p>
  </v-sheet>

    <v-container class="my-4" v-if="!isLoading">

      <v-row align="start" justify="center">
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-card max-width="400">
            <v-sheet color="accent">
              <v-card-title>My Domains</v-card-title>
            </v-sheet>
            <v-card-text>
              <v-list class="rounded">
                <v-list-item v-for="customerDomain in userData.customerDomains" :key="customerDomain">
                 <v-btn class="pa-2 my-2" @click="openLink(`https://${customerDomain}`)" type="button">
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
              <v-card-title>My Subscriptions ({{userData.stripeCustomerSubscriptions.count}})</v-card-title>
            </v-sheet>
            <v-card-text>
              <v-list class="rounded">
                <v-list-item v-for="customerSubscription in userData.stripeCustomerSubscriptions.items" :key="customerSubscription.id">
                  {{ customerSubscription.description }}
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-card max-width="400">
            <v-sheet color="accent">
              <v-card-title>Open Invoices ({{userData.stripeCustomerInvoices.length}})</v-card-title>
            </v-sheet>
            <v-card-text>
              <v-list class="rounded">
                <v-list-item v-for="customerInvoice in userData.stripeCustomerInvoices.data"
                             :key="customerInvoice.id" class="mb-4">
                  <v-row align="center">
                    <v-col>
                      {{ customerInvoice.lines.data[0].description }}
                    </v-col>
                    <v-col>
                      Due {{new Date(customerInvoice.due_date * 1000).toLocaleDateString()}}
                    </v-col>
                    <v-col>
                      <v-btn @click="openLink(customerInvoice.hosted_invoice_url)">Pay Now</v-btn>
                    </v-col>
                  </v-row>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center" align="baseline">
        <v-col>
          <v-sheet class="d-flex flex-column align-center justify-center pa-4" color="highlight" rounded>
            <stripe-customer-portal :stripe-customer-id="userData.stripeCustomerID" class="my-4"/>
  <!--          <v-btn class="my-4" @click="toggleForm" type="button">Contact</v-btn>-->
          </v-sheet>
        </v-col>

        <v-expand-transition>
          <v-col cols="12" v-if="formIsActive">
            <the-contact-form />
          </v-col>
        </v-expand-transition>
      </v-row>
    </v-container>

    <v-container v-else>
      <p class="text-center text-h6">
        Loading your dashboard... <v-progress-circular indeterminate />
      </p>

    </v-container>

</template>

<script setup>
  import TheContactForm from "@/components/TheContactForm";
  import StripeCustomerPortal from "@/components/StripeCustomerPortal.vue";
  import {useUserDataStore} from "@/store/userData";
  import {onMounted,ref} from "vue";

  const userData =  useUserDataStore()
  const isLoading = ref(true)
  // const customerSubscriptions = ref("")

  const formIsActive = ref(null)

  const toggleForm = () => {
    formIsActive.value = !formIsActive.value
  }

  const openLink = (link) => {
    window.open(link)
  }

  // watch(
  //   userData, () => {
  //     customerSubscriptions.value = userData.stripeCustomerData.subscriptions;
  //   })


  onMounted( async () => {
    if (userData.isAuthenticated) {
      await userData.getCustomerData()
      await userData.getCustomerInvoices()
      await userData.getUserMetadata()
      isLoading.value = false
    }
    else {
      alert("There was an error with the login service. Please try again later.")
    }
  })

</script>

<style scoped>

</style>
