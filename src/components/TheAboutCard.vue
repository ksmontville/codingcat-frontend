<template>

  <v-card color="primary" class="my-2" v-for="infoBullet in infoBullets" :key="infoBullet.id">
    <v-sheet color="secondary" class="pa-4">
      <v-card-title class="text-h4 my-2">{{ infoBullet.name }}</v-card-title>
      <v-card-subtitle class="text-h5 my-2">{{ infoBullet.title }}</v-card-subtitle>
    </v-sheet>

    <v-card-text>
      <v-row class="d-flex flex-row align-start">

        <v-col :cols="mobile ? 12 : 4">
          <figure>
            <v-img class="rounded-lg ma-auto" :src="infoBullet.image" max-width="400" />
            <figcaption class="text-center pa-2"><em>Kyle in his former physics classroom.</em></figcaption>
          </figure>
        </v-col>

        <v-col class="" :cols="mobile ? 12 : 8">

          <v-row>
            <v-col :cols="mobile ? 12 : 6">
              <v-sheet color="accent" class="text-h6 text-center rounded-lg my-4 pa-2">Education & Experience</v-sheet>
              <v-sheet class="rounded-lg" color="primary">
                <v-card-text>
                  <v-list bg-color="primary" v-for="bullet in infoBullet.background">
                    <v-list-item class="text-body-1">
                      <v-icon icon="code" />
                      {{ bullet }}
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-sheet>

            </v-col>

            <v-col :cols="mobile ? 12 : 6">
              <v-sheet color="accent" class="text-h6 text-center rounded-lg my-4 pa-2">Background & Interests</v-sheet>
              <v-sheet color="primary" class="body-text text-body-1 rounded-lg pa-4">{{ infoBullet.description }}</v-sheet>
            </v-col>

          </v-row>

        </v-col>

<!--        <v-col :cols="mobile ? 12 : 4" >-->
<!--        </v-col>-->
      </v-row>
    </v-card-text>
  </v-card>



</template>

<script setup>
import {useDisplay} from "vuetify";

const {mobile} = useDisplay()

const infoBullets = [
  {
    id: 0,
    image: "./src/assets/img/kylemontville.jpeg",
    name: "Kyle Montville",
    title: "Developer & Owner",
    background: [
      "Master of Arts in Teaching, Clarkson University",
      "Bachelor of Science in Physics and Mathematics (dual major), State University of New York at Albany",
      "Six years experience as a high school science teacher",
      "Two years experience designing and deploying websites"
    ],
    description: "CodingCat, LLC is owned and operated by Kyle Montville. Kyle is a former high school science teacher who " +
      "has transitioned into designing and deploying modern, responsive, and performant web applications for small businesses. " +
      " Kyle has recently relocated to the San Francisco Bay Area with his wife after growing up, living, and working in the northeast, specifically upstate New York " +
      "and New Hampshire. When not working on CodingCat and serving its clients, his free time is spent on cycling, reading, video games, Warhammer, and board games. " +
      "CodingCat earns its namesake from Kyle's two favorite things: programming and cats!"
  }
]

</script>

<style scoped>

</style>
