<template>
  <v-container>
    <v-card>
      <v-card-title>My Skill</v-card-title>

      HTML5,CSS
      <v-progress-linear
        value="80"
        height="10px"
        color="#ec407a"
      ></v-progress-linear>
      Javscript
      <v-progress-linear
        value="80"
        height="10px"
        color="#f4511e"
      ></v-progress-linear>
      vue
      <v-progress-linear
        value="50"
        height="10px"
        color="#512da8"
      ></v-progress-linear>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
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
