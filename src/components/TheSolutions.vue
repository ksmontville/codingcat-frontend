<template>

  <v-container>
    <v-row align="start" justify="center">

      <v-col cols="12">
        <p class="text-h4 body-text text-center">{{ solutionsText }}</p>
      </v-col>

      <v-col cols="12" md="4" v-for="heroBullet in heroBullets" :key="heroBullet.id">

        <v-card color="secondary" class="d-flex flex-column ma-auto pa-2" max-width="400" min-height="224">
          <v-card-title @click="toggleDialog">{{ heroBullet.title }}</v-card-title>
          <v-card-text>
            <v-sheet color="secondary" class="body-text text-body-2">
              {{ heroBullet.text }}
            </v-sheet>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" size="small" variant="elevated" @click="heroBullet.dialog = true" type="button">
              {{ heroBullet.btnText }}
              <v-icon color="secondary" class="ml-4" icon="md:info" />
            </v-btn>
              <v-dialog v-model="heroBullet.dialog" :max-width="800" :fullscreen="mobile" transition="scale-transition">
                <v-sheet color="primary" class="d-flex flex-column align-center justify-center pa-4">
                  <p class="body-text text-body-1 pa-4">{{ heroBullet.description }}</p>
                  <v-btn color="accent" class="text-button ma-8"
                         @click="heroBullet.dialog = false" type="button">Close</v-btn>
                </v-sheet>
            </v-dialog>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col>
        <v-sheet class="d-flex flex-column align-center ma-auto pa-4" max-width="800">
          <p class="body-text text-body-1">{{ scheduleText }}</p>
          <v-btn class="text-button mt-8" size="x-large" color="accent" @click="toggleConsultForm" type="button">
            {{ showConsultForm ? "Close" : "Schedule"}}
          </v-btn>
        </v-sheet>
      </v-col>

      <v-col cols="12">
        <v-expand-transition>
          <v-sheet v-if="showConsultForm">
              <the-consult-form />
          </v-sheet>
        </v-expand-transition>
      </v-col>

    </v-row>
  </v-container>



</template>

<script setup>
import TheConsultForm from "@/components/TheConsultForm.vue";
import {useDisplay} from "vuetify";
import {reactive, ref} from "vue";

const {mobile} = useDisplay()

const solutionsText = "The Cat's Meow"
const scheduleText = "Schedule a free, one-hour remote consultation to discuss the needs of your business and how CodingCat can help maximize your web capabilities."

const showConsultForm = ref(null)
const isOpen = ref(false)

const toggleDialog = () => {
  isOpen.value = !isOpen.value
}

const toggleConsultForm = () => {
  showConsultForm.value = !showConsultForm.value
}

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

</script>

<style scoped>

</style>
