<template>
  <div class="main-view">
    <CloseButton class="smaller" />
    <div class="content">
      <div class="centerTag">
        <div class="tag">
          <h1>{{ name }}</h1>
        </div>
      </div>
      <div class="centerContainer">
        <div class="planetContainer">
          <img
            :class="[
              { sizePlanet: !resizeSaturn },
              { sizeSaturn: resizeSaturn },
            ]"
            :src="require('@/assets/' + name + '.svg')"
            :alt="planetName"
          />
        </div>
        <div class="infoContainer">
          <PanelInfo
            :planetName="name"
            :distanceToSun="distanceToSun"
            :distanceToEarth="distanceToEarth"
            :avgTemperature="avgTemperature"
            :diameter="diameter"
            :dayDuration="dayDuration"
            :yearDuration="yearDuration"
            :curiosities="curiosities"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseButton from "../components/CloseButton.vue";
import PanelInfo from "../components/PanelInfo.vue";

export default {
  components: {
    CloseButton,
    PanelInfo,
  },
  data() {
    return {
      name: "",
      distanceToSun: "",
      distanceToEarth: "",
      avgTemperature: "",
      diameter: "",
      dayDuration: "",
      yearDuration: "",
      curiosities: "",
      resizeSaturn: false,
    };
  },
  created() {
    const planet = this.$route.params.id;
    const planetInfo = this.$store.getters.getPlanetInfo(planet);
    this.resizeSaturn = planetInfo.name === "Saturn" ? true : false;
    this.name = planetInfo.name;
    this.distanceToSun = planetInfo.distanceToSun;
    this.distanceToEarth = planetInfo.distanceToEarth;
    this.avgTemperature = planetInfo.temperature;
    this.diameter = planetInfo.diameter;
    this.dayDuration = planetInfo.dayDuration;
    this.yearDuration = planetInfo.yearDuration;
    this.curiosities = planetInfo.curiosities;
  },
};
</script>

<style scoped lang="scss">
.content {
  height: 100vh;
  width: 100vw;
  display: inline-block;
  text-align: center;
}
.centerTag {
  display: inline-block;
  height: 0;
}
.tag {
  background-color: white;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  border-radius: 5vh;
}

h1 {
  font-family: "Source Code Pro", monospace;
  font-weight: 400;
  font-size: 3vw;
  color: #000000;
}

.centerContainer {
  height: 88.3vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
}

.sizeSaturn {
  width: 40vw;
  height: auto;
}
.sizePlanet {
  width: 25vw;
  height: auto;
}

@media (max-width: 1000px) {
  h1 {
    font-family: "Source Code Pro", monospace;
    font-weight: 400;
    font-size: 3.5vw;
    color: #000000;
  }
}

@media (max-width: 800px) {
  h1 {
    font-family: "Source Code Pro", monospace;
    font-weight: 400;
    font-size: 4vw;
    color: #000000;
  }
}
@media (max-width: 700px) {
  h1 {
    font-family: "Source Code Pro", monospace;
    font-weight: 400;
    font-size: 5vw;
    color: #000000;
  }
  .centerContainer {
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr;
    grid-auto-flow: column;
    justify-items: center;
    align-items: center;
    height: 1000px;
  }
  .sizeSaturn {
    width: 40vw;
    height: auto;
  }
  .sizePlanet {
    width: 40vh;
    height: auto;
  }
  .infoContainer {
    align-self: start;
  }
}
@media (max-width: 600px) {
  h1 {
    font-family: "Source Code Pro", monospace;
    font-weight: 400;
    font-size: 6vw;
    color: #000000;
  }
}

@media (max-width: 500px) {
  h1 {
    font-family: "Source Code Pro", monospace;
    font-weight: 400;
    font-size: 7vw;
    color: #000000;
  }
}
@media (max-width: 400px) {
  h1 {
    font-family: "Source Code Pro", monospace;
    font-weight: 400;
    font-size: 8vw;
    color: #000000;
  }
}
@media (max-width: 300px) {
  h1 {
    font-family: "Source Code Pro", monospace;
    font-weight: 400;
    font-size: 6vw;
    color: #000000;
  }
}
@media (max-width: 200px) {
  h1 {
    font-family: "Source Code Pro", monospace;
    font-weight: 400;
    font-size: 8vw;
    color: #000000;
  }
}
</style>

