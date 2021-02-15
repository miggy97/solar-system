<template>
  <div class="main-view">
    <div class="titleCenter" v-if="!isMobile">
      <h1 class="title">Solar System</h1>
    </div>
    <div class="planets">
      <router-link :class="{sun: isMobile}" class="sun" to="/"
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
      <router-link class="neptune" :to="linkToPlanet('neptune')"
        ><Planet planetName="Neptune" :isTag="true" :isEnlarge="false"
      /></router-link>
    </div>
  </div>
</template>

<script>
import Planet from "../components/Planet.vue";
import gsap from "gsap";
export default {
  components: {
    Planet,
  },
  data() {
    return {
      isMobile: false,
    }
  },
  methods: {
    linkToPlanet(planet) {
      return { name: "planet", params: { id: planet } };
    },
    handleView() {
      this.isMobile = window.innerWidth <= 700;
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.handleView();
    });
    let isAnim = this.$store.getters.getIsInitialAnim;
    if(isAnim){
      gsap.timeline()
      .from(".planets a:not(:first-child)", {y:80, opacity:0,stagger:0.1, duration:1, ease:"back"})
      .from(".title", {opacity:0, scale:0, ease:"circ", duration:1})
    }
    this.$store.commit('setIsInitialAnim', false);
  },
  created() {
    this.handleView();
  },
};
</script>

<style scoped lang="scss">
.titleCenter {
  position: absolute;
  display: inline-block;
  height: 0;
  left: 50%;
  h1 {
    position: relative;
    left: -50%;
    color: #f5f5f5;
    border-style: solid;
    font-size: 5vw;
    font-family: "IBM Plex Mono", monospace;
    background-color: rgba(25, 28, 40, 0.5);
    padding-left: 2vw;
    padding-right: 2vw;
    border-radius: 5vw;
  }
}

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
    height: 1150px;
  }
  .sun {
    transform: rotate(90deg);
    margin-right: 0;
    position: absolute;
  }

  .sunPlaceholder {
    height: 20vh;
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

@media (max-width: 480px) {
  .sunPlaceholder {
    height: 18vh;
  }
}

@media (max-width: 370px) {
  .sunPlaceholder {
    height: 13vh;
  }
}
@media (max-width: 290px) {
  .sunPlaceholder {
    height: 8vh;
  }
}
@media (max-width: 220px) {
  .sunPlaceholder {
    height: 3vh;
  }
}
</style>

