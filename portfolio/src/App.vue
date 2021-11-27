<template>
  <v-app>
    <Header />
    <Intro />
    <v-divider />
    <Skill />
    <v-divider />
    <Project />
  </v-app>
</template>

<script>
import Header from "./components/title.vue";
import Intro from "./components/intro.vue";
import Skill from "./components/skill.vue";
import Project from "./components/project.vue";
export default {
  name: "App",

  components: {
    Header,
    Intro,
    Skill,
    Project,
  },

  data: () => ({
    //
  }),
};
</script>
