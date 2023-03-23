<template>

  <v-sheet class="d-flex flex-column align-center ma-4 pa-2" color="highlight" rounded>
     <small class="text-center">
        CodingCat, LLC is fully operational and ready to serve your business, but our new website is still under construction.
      </small>
      <small>
        We ask for your paw-tience while we get set up!
      </small>
  </v-sheet>


  <v-sheet class="d-flex flex-column justify-center align-center">

    <v-container class="pa-4">


       <v-col class="" cols="12">
          <v-container class="text-h2 text-md-h1 text-center">
            {{ heroText }}
          </v-container>
       </v-col>

        <v-col class="ma-auto" cols="8">
          <v-img src="../assets/img/catprogrammer.jpg" max-height="400"/>

        </v-col>


    </v-container>

    <v-container class="text-md-h2 mt-4 pa-4 text-center text-overline">
      {{ heroSubText }}
    </v-container>

</v-sheet>


  <v-sheet color="" class="pa-2">
    <v-container>
      <v-row align="start">
        <v-col cols="12" v-for="heroBullet in heroBullets" :key="heroBullet.id">
          <v-card color="secondary" class="d-flex flex-column pa-2">
            <v-card-title @click="toggleDialog">{{ heroBullet.title }}</v-card-title>
            <v-card-text>
              <v-sheet color="secondary" class="body-text text-body-2">
                {{ heroBullet.text }}
              </v-sheet>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" size="small" variant="elevated" @click="heroBullet.dialog = true">
                {{ heroBullet.btnText }}
                <v-icon color="highlight" class="ml-4" icon="md:info" />
              </v-btn>
                <v-dialog v-model="heroBullet.dialog" :max-width="800" :fullscreen="mobile">
                  <v-sheet color="primary" class="d-flex flex-column align-center justify-center pa-4">
                    <p class="body-text text-body-1 pa-2">{{ heroBullet.description }}</p>
                    <v-btn color="accent" class="text-button ma-8" @click="heroBullet.dialog = false">Close</v-btn>
                  </v-sheet>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-sheet color="" class="d-flex flex-column align-center pa-4">
      <p class="body-text text-body-1">{{ getStartedText }}</p>
      <v-btn class="text-button ma-8" size="x-large" color="accent" @click="toggleConsultForm">
        {{ showConsultForm ? "Close" : "Schedule"}}
      </v-btn>
    </v-sheet>

    <v-sheet v-if="showConsultForm">
      <the-consult-form />
    </v-sheet>

  </v-sheet>
</template>

<script setup>
import {reactive, ref} from "vue";
import {useDisplay} from 'vuetify';
import TheConsultForm from '@/components/TheConsultForm'

const {mobile} = useDisplay()

const dialog = ref(false)
const showConsultForm = ref(null)

const heroText = "CodingCat"
const heroSubText = "Designer web solutions purrrfect for your small business."
const heroBullets = reactive([
  {id: 0, title:"Higher Scores", text: "Increase visibility with maximized page scores and search engine optimizations.",
  btnText: "Your Page Score Matters",
    description: 'Search engine optimization, or "SEO", is a combination of many different technical specifications, but one of the ' +
      'easiest ways to increase your search engine rank is to make sure that your pages load as fast as possible, ' +
      'that your content and links are easily discovered or "indexed", and that your website contains important meta-information about' +
      'the purpose and function of your website.', dialog: false},
  {id: 1, title:"Increased Engagement", text: "Engage users with responsive layouts, high-performance interactions, and instantaneous page loads.",
  btnText: "Engaged Users Generate Value",
    description: "A user who visits your page is more likely to click further into your website if it is responsive, fast, intuitive, " +
      "and contains useful animations & dialogues which help direct the user to the content that they are looking for. A user who spends " +
      "more time on your website is more likely to purchase your product or service, share your website with others, or bookmark your pages " +
      "for browsing at a later time.", dialog: false},
  {id: 2, title:"More Control", text: "Take control of your website with a custom content management system, or opt for curated page edits on demand.",
  btnText: "Interact With Your Website",
    description: "Being able to directly control the content of a website empowers its owner to use the website to its full potential. Whether " +
      "it is posting a new article in a blog to generate search engine hits, uploading images of a recent event at your business, or sharing your most updated contact page with a " +
      "potential business associate, the rate of return on a website is maximized when its owner has the ability to make edits to its content when the opportunity arises.",
      dialog: false},
  {id: 3, title:"Personal Service", text: "Expert customer service with a real person, never a chatbot or an automated directory.",
  btnText: "Talk to a Real Person",
    description: "At CodingCat, you will always be assisted by a real person, one who personally knows your business interests and how your " +
      "website is endeavoring to further those goals. You will never be redirected to an off-shore customer service agency, a clunky " +
      "automated switchboard, or an unhelpful chatbot with pre-rendered responses.",
    dialog: false},
  {id: 4, title: "Lower Cost", text: "Transparent and upfront pricing which reflects the budget of a small business with no surprises.",
  btnText: "How We Keep Costs Down",
    description: "CodingCat is a small business just like yours, and as such we understand the unique challenges and financial constraints which " +
      "inform the decision making process of your business. CodingCat does not have a large office to maintain, leagues of private investors " +
      "to appease, nor a tangled personnel directory obfuscating the chain of command. We are small, we intend to stay small, and we " +
      "want to make sure that other small players have the same tools, resources, and knowledge as the big players.",
    dialog: false}
])
const getStartedText = "Schedule a free, one-hour remote consultation to discuss the needs of your business and how CodingCat can help maximize your web capabilities."

const isOpen = ref(false)

const toggleDialog = () => {
  isOpen.value = !isOpen.value
}

const toggleConsultForm = () => {
  showConsultForm.value = !showConsultForm.value
}

</script>

<style scoped>

</style>
