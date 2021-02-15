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
            v-if="displaySection === 'picture'"
            :class="[
              { sizePlanet: !resizeSaturn },
              { sizeSaturn: resizeSaturn },
            ]"
            :src="require('@/assets/' + name + '.svg')"
            :alt="planetName"
          />
          <ImagePanel v-if="displaySection === 'images'" :planetName="name" />
          <ThreeDModel v-if="displaySection === '3D'" :planetName="name" />
          <div class="planetOptions">
            <div class="centerTag">
              <div
                class="images"
                :class="{ selected: displaySection === 'images' }"
                @click="displaySection = 'images'"
              >
                <img src="@/assets/cameraIcon.svg" alt="images" />
                <h2>Images</h2>
              </div>
            </div>
            <div class="centerTag">
              <div
                class="picture"
                :class="{ selected: displaySection === 'picture' }"
                @click="displaySection = 'picture'"
              >
                <img src="@/assets/circleIcon.svg" alt="Picture" />
                <h2>Picture</h2>
              </div>
            </div>
            <div class="centerTag">
              <div
                class="threeD"
                :class="{ selected: displaySection === '3D' }"
                @click="displaySection = '3D'"
              >
                <img src="@/assets/threeD.svg" alt="3d" />
                <h2>3D view</h2>
              </div>
            </div>
          </div>
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
import ImagePanel from "../components/ImagePanel.vue";
import ThreeDModel from "../components/ThreeDModel.vue";
import gsap from "gsap";

export default {
  components: {
    CloseButton,
    PanelInfo,
    ImagePanel,
    ThreeDModel,
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
      displaySection: "picture",
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
  mounted() {
    window.scrollTo(0, 0);
    gsap.timeline()
      .from(".images", {opacity:0, scale:0, ease:"circ"})
      .from(".picture", {opacity:0, scale:0, ease:"circ"})
      .from(".threeD", {opacity:0, scale:0, ease:"circ"})
      .from(".images img", {scale:0, ease:"circ"})
      .from(".picture img", {scale:0, ease:"circ"})
      .from(".threeD img", {scale:0, ease:"circ"})
      .from(".threeD img", {rotation:-360, ease:"circ"})
      
  }
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

.planetContainer {
  display: grid;
  grid-template-rows: 3fr 1fr;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  align-items: center;
  justify-items: center;
}

.planetOptions {
  display: flex;
  justify-content: space-between;

  div {
    div {
      background-color: #191c28;
      border-style: solid;
      padding: 0 0.8vw;
      border-radius: 5vh;
      display: grid;
      grid-template-columns: 1fr 2fr;
      align-items: center;
      margin: 0 7px;
      cursor: pointer;
      &:hover {
        background-color: #2c3e50;
      }
      img {
        width: 2vw;
      }
      h2 {
        font-family: "Roboto", sans-serif;
        margin-top: 0.4vw;
        margin-bottom: 0.4vw;
        color: #cecece;
        font-size: 1.8vw;
      }
    }
  }
}

.selected {
  background-color: #2c3e50 !important;
}

.sizeSaturn {
  width: 40vw;
  height: auto;
}
.sizePlanet {
  width: 25vw;
  height: auto;
}

@media (max-width: 1050px) {
  .planetOptions div div {
    img {
      width: 2.5vw;
    }
    h2 {
      font-family: "Roboto", sans-serif;
      margin-top: 0.4vw;
      margin-bottom: 0.4vw;
      color: #cecece;
      font-size: 2.3vw;
    }
  }
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
  .planetOptions div div {
    img {
      width: 4vw;
    }
    h2 {
      font-family: "Roboto", sans-serif;
      margin-top: 0.4vw;
      margin-bottom: 0.4vw;
      color: #cecece;
      font-size: 4.3vw;
    }
  }
  .content {
    height: 1150px;
    width: 100vw;
    display: inline-block;
    text-align: center;
  }
  .centerContainer {
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 2fr;
    grid-auto-flow: column;
    justify-items: center;
    align-items: center;
    height: 1180px;
  }
  .sizeSaturn {
    width: 80vw;
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
  .sizeSaturn {
    width: 80vw;
    height: auto;
  }
  .planetOptions div div {
    img {
      width: 5vw;
    }
    h2 {
      font-family: "Roboto", sans-serif;
      margin-top: 0.4vw;
      margin-bottom: 0.4vw;
      color: #cecece;
      font-size: 5.3vw;
    }
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

