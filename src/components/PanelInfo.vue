<template>
  <div class="panel">
    <!-- Distance to de Sun -->
    <section>
      <div class="centerTag">
        <div class="tag">
          <h2>Distance to de Sun</h2>
        </div>
      </div>
      <h5 class="distanceNumSun">{{ distanceToSun }}</h5>
      <div class="distanceSun">
        <img class="sun" src="@/assets/Sun.svg" alt="Sun" />
        <img
          :class="{ lineSaturn: isSaturn }"
          class="lineSun"
          src="@/assets/Line.svg"
          alt="arrow"
        />
        <img
          :class="planetSizeClass"
          :src="require('@/assets/' + planetName + '.svg')"
          :alt="planetName"
        />
      </div>
    </section>

    <!-- Distance to de Earth -->
    <section v-if="!isEarth">
      <div class="centerTag">
        <div class="tag">
          <h2>Distance to de Earth</h2>
        </div>
      </div>
      <h5
        :class="[
          { distanceNumEarth: !isNumFar },
          { distanceNumEarthFar: isNumFar },
        ]"
      >
        {{ distanceToEarth }}
      </h5>
      <div class="distanceEarth">
        <img class="earth" src="@/assets/Earth.svg" alt="Earth" />
        <img
          :class="[
            { lineEarth: !isLineClose },
            { lineEarthClose: isLineClose },
          ]"
          src="@/assets/Line.svg"
          alt="arrow"
        />
        <img
          :class="planetSizeClass"
          :src="require('@/assets/' + planetName + '.svg')"
          :alt="planetName"
        />
      </div>
    </section>

    <!-- Average temperature -->
    <section style="margin-top: 15px">
      <div class="centerTag">
        <div class="tag">
          <h2>Average temperature</h2>
        </div>
      </div>
      <div class="avgTemperature">
        <img
          class="thermometer"
          src="@/assets/Thermometer.svg"
          alt="thermometer"
        />
        <ul>
          <li v-for="temp in avgTemperature" :key="temp.tem">
            {{ temp.tem }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Diameter and day duration -->
    <section class="divide">
      <section class="alignDiameter">
        <div class="centerTag">
          <div class="tag">
            <h2>Diameter</h2>
          </div>
        </div>
        <h5 class="diameter">{{ diameter }}</h5>
        <img
          class="diameter-logo"
          src="@/assets/Diameter-logo.svg"
          alt="Diameter"
        />
      </section>
      <section class="alignDayDuration">
        <div class="centerTag">
          <div class="tag">
            <h2>Day duration</h2>
          </div>
        </div>
        <div class="centerDayDuration">
          <div>
            <img
              :class="[{ day: !isSaturn }, { saturnDay: isSaturn }]"
              :src="require('@/assets/' + planetName + '-day.svg')"
              alt="day"
            />
            <img
              :class="[{ day: !isSaturn }, { saturnDay: isSaturn }]"
              :src="require('@/assets/' + planetName + '-night.svg')"
              alt="night"
            />
          </div>
          <h5>{{ dayDuration }}</h5>
        </div>
      </section>
    </section>

    <!-- Year duration -->
    <section style="margin-top: 15px">
      <div class="centerTag">
        <div class="tag">
          <h2>Year duration</h2>
        </div>
      </div>
      <div class="yearDuration">
        <img class="ellipse" src="@/assets/Ellipse.svg" alt="ellipse" />
        <h5 class="year">{{ yearDuration }}</h5>
      </div>
    </section>

    <!-- Curiosities -->
    <section style="margin-top: 15px">
      <div class="centerTag">
        <div class="tag">
          <h2>Curiosities</h2>
        </div>
      </div>
      <ul class="curiosities">
        <li v-for="cur in curiosities" :key="cur.curi">
          {{ cur.curi }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  props: [
    "planetName",
    "distanceToSun",
    "distanceToEarth",
    "avgTemperature",
    "diameter",
    "dayDuration",
    "yearDuration",
    "curiosities",
  ],
  data() {
    return {
      isMercury: false,
      isVenus: false,
      isEarth: false,
      isMars: false,
      isJupiter: false,
      isSaturn: false,
      isUranus: false,
      isNeptune: false,
      isNumFar: false, // Makes value distance earth closer to de line
      isLineClose: false, // Makes line arrow far from earth and planet
    };
  },
  computed: {
    planetSizeClass() {
      return [
        { planetMercury: this.isMercury },
        { planetVenus: this.isVenus },
        { planetEarth: this.isEarth },
        { planetMars: this.isMars },
        { planetJupiter: this.isJupiter },
        { planetSaturn: this.isSaturn },
        { planetUranus: this.isUranus },
        { planetNeptune: this.isNeptune },
      ];
    },
  },
  created() {
    this.isMercury = this.planetName === "Mercury" ? true : false;
    this.isVenus = this.planetName === "Venus" ? true : false;
    this.isEarth = this.planetName === "Earth" ? true : false;
    this.isMars = this.planetName === "Mars" ? true : false;
    this.isJupiter = this.planetName === "Jupiter" ? true : false;
    this.isSaturn = this.planetName === "Saturn" ? true : false;
    this.isNeptune = this.planetName === "Neptune" ? true : false;
    this.isUranus = this.planetName === "Uranus" ? true : false;

    this.isLineClose =
      this.planetName === "Jupiter" || this.planetName === "Saturn"
        ? true
        : false;
    this.isNumFar =
      this.planetName === "Jupiter" || this.planetName === "Uranus"
        ? true
        : false;
  },
};
</script>

<style scoped lang="scss">
.panel {
  background-color: white;
  height: 77vh;
  width: 23em;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.1)
  );
  border-radius: 3.5vh;
  backdrop-filter: blur(0.1rem);
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }
  &::-webkit-scrollbar {
    width: 10px;
    background: transparent;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.3);
  }
  &::-webkit-scrollbar-track-piece:start {
    margin-top: 12px;
  }
  &::-webkit-scrollbar-track-piece:end {
    margin-bottom: 12px;
  }
}
.centerTag {
  display: inline-block;
}
.tag {
  background-color: white;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 20px;
}
h2 {
  font-family: "Source Code Pro", monospace;
  font-weight: 200;
  color: #000;
  font-size: 22px;
}

.sun {
  width: 55px;
  height: auto;
  display: block;
}
.distanceNumSun {
  font-family: "Source Code Pro", monospace;
  font-weight: 400;
  font-size: 14px;
  color: #000;
  margin-bottom: -50px;
}
.lineSun {
  width: 200px;
  margin-left: 10px;
  margin-right: 10px;
}

.lineSaturn {
  margin-right: -5px;
}

// Size according to each planet
.planetMars,
.planetMercury {
  width: 40px;
  height: auto;
}
.planetEarth,
.planetVenus {
  width: 45px;
  height: auto;
}

.planetJupiter {
  width: 65px;
  height: auto;
}
.planetSaturn {
  width: 90px;
  height: auto;
}
.planetUranus {
  width: 60px;
  height: auto;
}
.planetNeptune {
  width: 50px;
  height: auto;
}
// END Size according to each planet
.distanceSun {
  display: flex;
  justify-content: flex-start;
}

.earth {
  width: 45px;
  height: auto;
}

h5 {
  font-family: "Source Code Pro", monospace;
  font-weight: 400;
  font-size: 14px;
  color: #000;
}

.distanceNumEarth {
  margin-bottom: -18px;
}
.distanceNumEarthFar {
  margin-bottom: -28px;
}
.lineEarth {
  width: 200px;
  margin-left: -30px;
  margin-right: -30px;
}
.lineEarthClose {
  width: 200px;
  margin-left: -13px;
  margin-right: -20px;
}
.distanceEarth {
  display: flex;
  justify-content: space-around;
}

.avgTemperature {
  display: grid;
  grid-template-columns: 1fr 2fr;

  ul {
    justify-self: start;
    margin-left: -45px;
    li {
      text-decoration: none;
      font-family: "Source Code Pro", monospace;
      font-weight: 400;
      font-size: 14px;
      color: #000;
      list-style-type: none;
    }
  }
}
.thermometer {
  width: 25px;
  height: auto;
  justify-self: center;
}
.divide {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 2fr 3fr;
  justify-items: center;
}
.diameter-logo {
  width: 125px;
  height: auto;
}
.diameter {
  position: absolute;
  margin-left: 38px;
  margin-top: 40px;
}
.day {
  width: 45px;
  height: auto;
  display: block;
  margin-top: 10px;
}
.saturnDay {
  width: 80px;
  height: auto;
  display: block;
  margin-top: 10px;
}
.centerDayDuration {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-items: start;
}
.ellipse {
  width: 125px;
  height: auto;
  animation: spin 10s linear infinite;
}
.yearDuration {
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
  justify-items: center;
}
.year {
  justify-self: start;
  margin-left: -15px;
}
.curiosities {
  text-align: left;
  li {
    text-decoration: none;
    list-style-type: none;
    font-family: "Source Code Pro", monospace;
    color: #000;
    padding: 10px 0;

    &::before {
      content: "\2022";
      color: #242526;
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 700px) {
  .panel {
    background-color: white;
    height: 85vh;
    width: 23em;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.1)
    );
    border-radius: 3.5vh;
    backdrop-filter: blur(0.1rem);
    overflow-y: scroll;
  }
}
@media (max-width: 400px) {
  .panel {
    background-color: white;
    height: 85vh;
    width: 20em;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.1)
    );
    border-radius: 3.5vh;
    backdrop-filter: blur(0.1rem);
    overflow-y: scroll;
  }
  .lineSun {
    width: 150px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .lineSaturn {
    margin-right: -2px;
  }

  .lineEarth {
    width: 150px;
    margin-left: -30px;
    margin-right: -30px;
  }
  .lineEarthClose {
    width: 150px;
    margin-left: -13px;
    margin-right: -20px;
  }
  .divide {
    margin-top: 20px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    grid-auto-flow: column;
    justify-items: center;
  }
  .alignDiameter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .alignDayDuration {
    margin-top: 15px;
  }
  .diameter {
    position: absolute;
    margin-left: 0px;
    margin-top: 60px;
  }
}
</style>