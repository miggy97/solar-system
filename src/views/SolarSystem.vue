<template>
  <div class="main-view">
    <div class="planets">
      <router-link class="sun" :to="linkToPlanet('sun')"
        ><Planet planetName="Sun" :isTag="false"
      /></router-link>
      <router-link class="mercury" :to="linkToPlanet('mercury')"
        ><Planet planetName="Mercury" :isTag="true"
      /></router-link>
      <router-link class="venus" :to="linkToPlanet('venus')"
        ><Planet planetName="Venus" :isTag="true"
      /></router-link>
      <router-link class="earth" :to="linkToPlanet('earth')"
        ><Planet planetName="Earth" :isTag="true"
      /></router-link>
      <router-link class="mars" :to="linkToPlanet('mars')"
        ><Planet planetName="Mars" :isTag="true"
      /></router-link>
      <router-link class="jupiter" :to="linkToPlanet('jupiter')"
        ><Planet planetName="Jupiter" :isTag="true"
      /></router-link>
      <router-link class="saturn" :to="linkToPlanet('saturn')"
        ><Planet planetName="Saturn" :isTag="true"
      /></router-link>
      <router-link class="uranus" :to="linkToPlanet('uranus')"
        ><Planet planetName="Uranus" :isTag="true"
      /></router-link>
      <router-link class="neptun" :to="linkToPlanet('neptun')"
        ><Planet planetName="Neptun" :isTag="true"
      /></router-link>
    </div>
  </div>
</template>

<script>
import Planet from "../components/Planet.vue";

export default {
  components: {
    Planet,
  },
  methods: {
    linkToPlanet(planet) {
      return { name: "planet", params: { id: planet } };
    },
  },
};
</script>

<style scoped lang="scss">
a {
  cursor: default;
  pointer-events: none;
  text-decoration: none;
}
.planets {
  height: 100vh;
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
}

.sun {
  margin-right: -2%;
}

.saturn {
  margin-right: -4%;
}

.jupiter {
  margin-right: -2%;
}
</style>

