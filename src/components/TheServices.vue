<template>

  <v-sheet color="white" class="d-flex flex-column align-center justify-center ma-auto" max-width="800">
    <p class="text-h4 body-text text-center my-4">Cat-alogue of Services</p>
    <v-expansion-panels variant="popout" multiple>
      <v-expansion-panel v-for="service in services" :key="service.id" type="button">
        <v-expansion-panel-title color="secondary">
          <div class="d-flex flex-column justify-center">
            <p class="text-h6">{{ service.title }}</p>
            <p class="text-caption">{{ service.subtitle }}</p>
          </div>
        </v-expansion-panel-title>
        <v-sheet color="primary">
          <v-expansion-panel-text class="body-text text-body-1 pa-2">{{ service.text }}</v-expansion-panel-text>
          <v-divider />
        </v-sheet>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-sheet>

</template>

<script setup>

  const services = [
    {id: 0, title: "Complete Redesign", subtitle: "Your Shiny New Website",
      text: "A complete redesign of your website from scratch using modern, high performance web tools. " +
        "Always a custom design with no page builders, restrictive templates, or bloated plugins. " +
        "From design to deployment, you will be involved in the process every step of the way."},
    {id: 1, title: "Content Management", subtitle: "à la carte",
      text: "Choose between a content management system which will allow you to do basic edits yourself (text, images, blog posts, etc.), " +
        "or elect for to allow CodingCat to manage more advanced, on-demand content edits for a monthly fee."},
    {id: 2, title: "Managed Hosting", subtitle: "Maintenance, Security, and Deployment",
      text: "Your website will be served from a reliable, scalable, and performant webhost with minimal downtime. " +
        "CodingCat will take care of all maintenance, security, and deployment. " +
        "Pay only the cost of hosting plus a small monthly service fee."},
    {id: 3, title: "Web Integrations", subtitle: "Storefronts, Food Delivery, Social Media, and More",
      text: "CodingCat can provide popular web integrations such as online storefronts through Shopify or Square, " +
        "food delivery apps like GruhHub or Snackpass, integrated one-click social media logins, and more. "},
    {id: 4, title: "User Auth & Data", subtitle: "Logins, User Profiles, and Databases",
      text: "Allow users to sign up, create profiles, and store their persistent data in a scalable database managed by CodingCat."},
    {id: 5, title: "Performance Metrics", subtitle: "Informative Data",
      text: "Monthly reports on your website's vital performance statistics such as number of page visits, search engine rank, " +
        "mobile usability, page speeds, conversion rates, and more."},

  ]

</script>

<style scoped>

</style>
