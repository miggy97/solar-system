<template>
  <div class="main-view">
    <div class="titleCenter" v-if="!isMobile">
      <h1 class="title">{{ title }}</h1>
    </div>
    <div class="language">
      <h2 class="lang">{{ language }}</h2>
      <label class="switch">
        <input type="checkbox" ref="langswitch" v-model="valueCbx" />
        <span class="slider round"></span>
      </label>
    </div>
    <div class="planets">
      <router-link :class="{ sun: isMobile }" class="sun" to="/"
        ><Planet
          planetName="Sun"
          planet="Sun"
          :isTag="false"
          :isEnlarge="false"
      /></router-link>
      <div class="sunPlaceholder"></div>
      <router-link class="mercury" :to="linkToPlanet('mercury')"
        ><Planet
          :planetName="planets.mercury"
          planet="Mercury"
          :isTag="true"
          :isEnlarge="false"
      /></router-link>
      <router-link class="venus" :to="linkToPlanet('venus')"
        ><Planet
          :planetName="planets.venus"
          planet="Venus"
          :isTag="true"
          :isEnlarge="false"
      /></router-link>
      <router-link class="earth" :to="linkToPlanet('earth')"
        ><Planet
          :planetName="planets.earth"
          planet="Earth"
          :isTag="true"
          :isEnlarge="false"
      /></router-link>
      <router-link class="mars" :to="linkToPlanet('mars')"
        ><Planet
          :planetName="planets.mars"
          planet="Mars"
          :isTag="true"
          :isEnlarge="false"
      /></router-link>
      <router-link class="jupiter" :to="linkToPlanet('jupiter')"
        ><Planet :planetName="planets.jupiter" planet="Jupiter" :isTag="true"
      /></router-link>
      <router-link class="saturn" :to="linkToPlanet('saturn')"
        ><Planet
          :planetName="planets.saturn"
          planet="Saturn"
          :isTag="true"
          :isEnlarge="true"
      /></router-link>
      <router-link class="uranus" :to="linkToPlanet('uranus')"
        ><Planet
          :planetName="planets.uranus"
          planet="Uranus"
          :isTag="true"
          :isEnlarge="false"
      /></router-link>
      <router-link class="neptune" :to="linkToPlanet('neptune')"
        ><Planet
          :planetName="planets.neptune"
          planet="Neptune"
          :isTag="true"
          :isEnlarge="false"
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
      title: "",
      valueCbx: true,
      language: "EN",
      planets: null,
    };
  },
  watch: {
    valueCbx(value) {
      if (value === false) {
        this.language = "ES";
        this.title = "Sistema Solar";
        this.$store.commit("setLanguage", "ES");
      } else {
        this.language = "EN";
        this.title = "Solar System";
        this.$store.commit("setLanguage", "EN");
      }
      this.changeLanguage();
    },
  },
  methods: {
    linkToPlanet(planet) {
      return { name: "planet", params: { id: planet } };
    },
    handleView() {
      this.isMobile = window.innerWidth <= 700;
    },
    changeLanguage() {
      this.planets = this.$store.getters.getPlanets;
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.handleView();
    });
    if (this.$store.getters.getLanguage === "EN") {
      this.valueCbx = true;
      this.$refs.langswitch.checked = true;
      this.title = "Solar System";
    } else {
      this.title = "Sistema Solar";
      this.valueCbx = false;
      this.$refs.langswitch.checked = false;
    }
    let isAnim = this.$store.getters.getIsInitialAnim;
    if (isAnim) {
      gsap
        .timeline()
        .from(".planets a:not(:first-child)", {
          y: 80,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: "back",
        })
        .from(".title", { opacity: 0, scale: 0, ease: "circ", duration: 1 });
    }
    this.$store.commit("setIsInitialAnim", false);
  },
  created() {
    this.handleView();
    this.planets = this.$store.getters.getPlanets;
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
  z-index: 0;
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

.language {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  right: 2%;
  top: 5%;
  z-index: 2;
}

.lang {
  margin-right: 10px;
  color: white;
  background-color: #081b32;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #9fc4e4;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #5e91e3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #5e91e3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
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
  .language {
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    right: 2%;
    top: 8%;
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

