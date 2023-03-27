<template>

  <v-sheet class="my-4 pa-2">
    <v-sheet class="text-h2 text-center pa-4">{{ pricingHeader }}</v-sheet>
    <p class="body-text text-body-1 pa-4">{{ pricingText }}</p>
    <v-sheet color="highlight" class="body-text text-h6 text-center pa-4 rounded my-2">
      <strong>{{ pricingSubtext }}</strong>
    </v-sheet>
      <v-expansion-panels>
        <v-expansion-panel bg-color="primary" v-for="processBullet in processBullets"
        :key="processBullet.id">
          <v-expansion-panel-title color="secondary">
            <p class="body-text text-body-1 pa-2">{{ processBullet.id + 1}}. {{ processBullet.title }}</p>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p class="body-text text-body-2 pa-2">{{ processBullet.text }}</p>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
  </v-sheet>

  <v-sheet class="my-8">
    <p class="body-text text-body-2 pa-4">{{ priceTableHeader }}</p>
    <the-price-table />
  </v-sheet>

</template>

<script setup>
import {reactive} from "vue";
import ThePriceTable from '@/components/ThePriceTable'

const pricingHeader = "Prices & Plans"
const pricingText = "CodingCat will work closely with you during every step of the process, from design to deployment to ongoing service, " +
  "to ensure that your website is best serving the needs of your business."

const pricingSubtext = "CodingCat Step-by-Step"

const priceTableHeader = "Choose from one of the plans listed below that best suit your business needs. " +
  "There are no fees for cancellation and you may cancel at any time."

const processBullets = reactive([

  {id: 0,
  title:  "Free Consultation",
  text: "First, we begin with a free, one hour consultation via Google Meet (or phone if client prefers) to discuss the needs of your business " +
    "and determine if the scope of the project is achievable by CodingCat within a reasonable timeline."},
  {id: 1,
  title: "Draft Specifications",
  text: "After, CodingCat will draft a document of project scope and enumerate each requested feature with an estimated price and timeline."},
  {id: 2,
  title: "Sign Contract",
  text: "Upon mutual agreement of project specifications, a formal contract will be signed detailing the project start date, " +
    "important work landmarks and deadlines, and finalized cost of the project. " +
    "There are NO SURPRISE COSTS. You will never pay more than what is written in the work contract!"},
  {
    id: 3,
    title: "Initial Deposit",
    text: "Before beginning work, client must create an online account and agree to pay a non-refundable deposit equal " +
      "to 25% of the agreed-upon project cost. " +
      "The remaining 75% of the agreed-upon project cost is to be paid in full via digital invoice after the project has been successfully deployed."
  },
  {id: 4,
  title: "Begin Work",
  text: "Then CodingCat will begin work on the project, making sure to stay in constant communication with the client regarding " +
    "design work, project features, potential roadblocks, and other emergent details necessitating client input."},
  {id: 5,
  title: "Deployment",
  text: "Finally, CodingCat will walk the client through the end product and provide any tutorials or walkthroughs as needed or by request. " +
    "The project will be deployed to a new webhost, and CodingCat will begin overseeing the editing, maintenance, " +
    "and security needs of the project."},
  {id: 6,
  title: "Ongoing Service",
  text: "Client will have access to an online customer portal where they may manage their subscriptions, invoices, payment methods, and more. " +
    "Client agrees to pay the ongoing costs of editing, hosting, and maintenance (if applicable) for the life of the project, or until client " +
    "wishes to end services with CodingCat. There are no fees for cancellation and you may cancel at the end of any billing cycle. " +
    "Client will receive a zip file containing all necessary project files for their own use and the business relationship between " +
    "client and CodingCat will end amicably."}

])

</script>

<style scoped>

</style>
