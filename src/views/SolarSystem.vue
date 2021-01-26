<template>
  <div class="main-view">
    <h1>Solar System</h1>
    <div>
      <router-link :to="linkToPlanet('sun')">Sun</router-link>
      <router-link :to="linkToPlanet('mercury')">Mercury</router-link>
      <router-link :to="linkToPlanet('venus')">Venus</router-link>
      <router-link :to="linkToPlanet('earth')">Earth</router-link>
      <router-link :to="linkToPlanet('mars')">Mars</router-link>
      <router-link :to="linkToPlanet('jupiter')">Jupiter</router-link>
      <router-link :to="linkToPlanet('saturn')">Saturn</router-link>
      <router-link :to="linkToPlanet('uranus')">Uranus</router-link>
      <router-link :to="linkToPlanet('neptun')">Neptun</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    linkToPlanet(planet) {
      return { name: "planet", params: { id: planet } };
    },
  },
};
</script>

<style scoped lang="scss">

a {
  display: block;
}
</style>

