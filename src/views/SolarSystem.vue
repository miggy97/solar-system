<template>
  <div class="main-view">
    <!-- <div class="titleCenter">
      <h1>Sistema Solar</h1>
    </div> -->
    <div class="planets">
      <router-link class="sun" :to="linkToPlanet('sun')"
        ><Planet planetName="Sun" :isTag="false" :isEnlarge="false"
      /></router-link>
      <div class="sunPlaceholder"></div>
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

.sun {
  margin-right: -2%;
}

.saturn {
  margin-right: -3%;
}

.jupiter {
  margin-right: -2%;
}

@media (max-width: 700px) {
  .planets {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    height: 1000px;
  }
  .sun {
    transform: rotate(90deg);
    margin-right: 0;
    position: absolute;
  }

  .sunPlaceholder {
    height: 25vh;
  }

  .saturn {
    margin-right: 0;
  }

  .jupiter {
    margin-right: 0;
  }

  a {
    cursor: default;
    pointer-events: none;
    text-decoration: none;
  }
}


@media (max-width: 370px) {
  .sunPlaceholder {
    height: 20vh;
  }
}
@media (max-width: 290px) {
  .sunPlaceholder {
    height: 15vh;
  }
}
@media (max-width: 220px) {
  .sunPlaceholder {
    height: 10vh;
  }
}
</style>

