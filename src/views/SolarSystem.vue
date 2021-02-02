<template>
  <div class="main-view">
    <!-- <div class="titleCenter">
      <h1>Sistema Solar</h1>
    </div> -->
    <div class="planets">
      <router-link class="sun" :to="linkToPlanet('sun')"
        ><Planet planetName="Sun" :isTag="false" :isEnlarge="false"
      /></router-link>
      <router-link class="mercury" :to="linkToPlanet('mercury')"
        ><Planet planetName="Mercury" :isTag="true" :isEnlarge="false"
      /></router-link>
      <router-link class="venus" :to="linkToPlanet('venus')"
        ><Planet planetName="Venus" :isTag="true" :isEnlarge="false"
      /></router-link>
      <router-link class="earth" :to="linkToPlanet('earth')"
        ><Planet planetName="Earth" :isTag="true" :isEnlarge="false"
      /></router-link>
      <router-link class="mars" :to="linkToPlanet('mars')"
        ><Planet planetName="Mars" :isTag="true" :isEnlarge="false"
      /></router-link>
      <router-link class="jupiter" :to="linkToPlanet('jupiter')"
        ><Planet planetName="Jupiter" :isTag="true"
      /></router-link>
      <router-link class="saturn" :to="linkToPlanet('saturn')"
        ><Planet planetName="Saturn" :isTag="true" :isEnlarge="true"
      /></router-link>
      <router-link class="uranus" :to="linkToPlanet('uranus')"
        ><Planet planetName="Uranus" :isTag="true" :isEnlarge="false"
      /></router-link>
      <router-link class="neptun" :to="linkToPlanet('neptun')"
        ><Planet planetName="Neptun" :isTag="true" :isEnlarge="false"
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

// .titleCenter{
//   position: absolute;
//   width: 100vw;
//   text-align: center;
//   margin-top: 5vh;
// }

// h1 {
//   font-family: "Source Code Pro", monospace;
//   color:white;
//   font-size: 5vw;
// }
.sun {
  margin-right: -2%;
}

.saturn {
  margin-right: -3%;
}

.jupiter {
  margin-right: -2%;
}
</style>

