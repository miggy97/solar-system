<template>
  <div class="main-view">
    <h1>Planet</h1>
    <router-link to="/">Back to Solar Sistem</router-link>
    <h2>{{ name }}</h2>
    <h3>{{ desc }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      desc: "",
    };
  },
  created() {
    const planet = this.$route.params.id;
    console.log(planet);
    const planetInfo = this.$store.getters.getPlanetInfo(planet);
    this.name = planetInfo.name;
    this.desc = planetInfo.desc;
  },
};
</script>