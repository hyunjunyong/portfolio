<template>
  <v-container>
    <v-card class="pa-5">
      <v-card-title>My Skill</v-card-title>

      <v-card-text>
        <div v-for="(data, index) in skills" :key="index">
          {{ data.skill }}
          <v-progress-linear
            :value="data.sPercent"
            height="15px"
            :color="data.sColor"
          >
            {{ data.sPercent }}
          </v-progress-linear>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      skills: [
        { skill: "HTML5,CSS3", sPercent: "80%", sColor: "#ec407a" },
        { skill: "Javscript", sPercent: "80%", sColor: "#f4511e" },
        { skill: "Vue.Js", sPercent: "50%", sColor: "#512da8" },
      ],
      increasing: 0,
    };
  },
  setup() {},
  create() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style scoped>
li {
  list-style-type: none;
}
</style>
