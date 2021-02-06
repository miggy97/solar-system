<template>
  <router-view></router-view>
  <vue-particles
    class="stars"
    color="#FFFFFF"
    :particleOpacity="1"
    :particlesNumber="130"
    shapeType="circle"
    :particleSize="4"
    linesColor="#dedede"
    :linesWidth="1"
    :lineLinked="false"
    :lineOpacity="0.4"
    :linesDistance="150"
    :moveSpeed="0.2"
    :hoverEffect="false"
    hoverMode="grab"
    :clickEffect="false"
    clickMode="push"
  >
  </vue-particles>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200;400&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
body,
html {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #081b32;
  min-height: 100vh;
}

.stars {
  height: 100vh;
}

.main-view {
  position: absolute;
  width: 100vw;
}

@media (max-width: 700px) {
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #081b32;
    height: 1300px;
  }

  .stars {
    height: 1300px;
  }

  .main-view {
    position: absolute;
    height: 1300px;
  }
}
</style>
