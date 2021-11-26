<template>
  <v-app>
    <Header />
    <Intro />
    <v-divider></v-divider>
    <Skill />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Intro from "./components/intro.vue";
import Skill from "./components/skill.vue";
export default {
  name: "App",

  components: {
    Header,
    Intro,
    Skill,
  },

  data: () => ({
    //
  }),
};
</script>
