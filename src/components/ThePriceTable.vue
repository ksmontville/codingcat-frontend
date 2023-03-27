<template>

  <v-sheet>
    <v-table class="text-center" density="comfortable" fixed-header>
      <thead>
        <tr>
          <th v-for="tableHeader in tableHeaders" class="text-h6 text-center">{{ tableHeader }}</th>
        </tr>
      </thead>
        <tbody>
        <tr v-for="planBullet in planBullets" :key="planBullet.id">
          <td class="body-text text-body-2">{{ planBullet.plan }}</td>
          <td>
            <v-btn class="text-button ma-4" @click="planBullet.dialog = true">View</v-btn>
              <v-dialog v-model="planBullet.dialog" max-width="800" :fullscreen="mobile">
                <v-sheet color="accent" class="d-flex flex-column justify-center align-center body-text text-body-1 pa-4">
                  <p>{{ planBullet.description }}</p>
                  <v-btn class="text-button ma-8" @click="planBullet.dialog = false" size="large">Close</v-btn>
                </v-sheet>
              </v-dialog>
          </td>
          <td>
            <v-sheet class="body-text text-body-2" :min-width="minSheetWidth">
              {{ planBullet.cost }}
            </v-sheet>
          </td>
          <td>
            <v-sheet class="body-text text-body-2" :min-width="minSheetWidth">
            {{ planBullet.edits }}
            </v-sheet>
          </td>
          <td>
            <v-sheet class="body-text text-body-2" :min-width="minSheetWidth">
            {{ planBullet.hosting }}
            </v-sheet>
          </td>
          <td>
            <v-sheet class="body-text text-body-2" :min-width="minSheetWidth">
            {{ planBullet.delivery }}
            </v-sheet>
          </td>
        </tr>
        </tbody>
    </v-table>
    <p class="my-8 pa-4"><small>{{ finePrint }}</small></p>
  </v-sheet>

</template>

<script setup>
import {reactive} from "vue";
import {useDisplay} from 'vuetify';

const {mobile} = useDisplay()

const tableHeaders = ["Plan", "Description", "Cost", "Edits", "Hosting", "Delivery"]
const minSheetWidth = 124
const hourlyRate = 50
const editRate = 25
const finePrint = "* Hosting costs calculated at current webhost pricing and are subject to change at any time."

const planBullets = reactive([
  {
    id: 0,
    plan: "Basic",
    description: "A complete redesign and redeploy of your website frontend. " +
      "We will work together to create a list of user stories, components, and deadlines for the project. " +
      "You will receive a complete Figma design file detailing the layout, color scheme, and basic functionality of your website before proceeding into coding. " +
      "Your website will be moved to a new webhost which will be managed by CodingCat. You may keep your current domain name. " +
      "Includes ongoing maintenance, bug fixes, monthly reports on website performance and SEO, an online customer portal for managing " +
      "invoices & payments, and personalized customer service. ",
    cost: `Fixed cost estimated at $${hourlyRate}/hour`,
    edits: `$${editRate}/hour`,
    hosting: "$0/month*",
    delivery: "Approx. 4 weeks",
    dialog: false,

  },
   {
    id: 1,
    plan: "Extra",
    description: "Basic package plus a custom content management system (CMS) which will allow you to control the content of your webpage independently. " +
      "Your CMS will receive ongoing maintenance, package updates, security monitoring, and everything else necessary to keep your content flowing smoothly. " +
      "Includes a tutorial session in which you will learn to use your website CMS, set up users, upload images, create new pages, etc.",
    cost: `Fixed cost estimated at $${1.5*hourlyRate}/hour`,
    edits: "Unlimited",
    hosting: "$30/month*",
    delivery: "Approx. 6 weeks",
    dialog: false,

  },
   {
    id: 2,
    plan: "Premium",
    description: "Basic or Extra package plus any custom integrations that your website may need such as an online storefront, " +
      "user authentication and authorization, persistent data storage, social media and marketing connections, " +
        "food delivery services, Google API services and more, " +
      "as well as unlimited edits for a fixed monthly fee (if not using a content management system).",
    cost: `Fixed cost estimated at $${2 * hourlyRate}/hour`,
    edits: `$${2 * hourlyRate}/month`,
    hosting: "Varies",
    delivery: "Varies",
     dialog: false,
  },

])



</script>

<style scoped>

</style>
