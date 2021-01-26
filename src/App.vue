<template>
  <router-view></router-view>
  <vue-particles class="stars"
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
body,
html {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #081b32;
  min-height: 100vh;
}

.stars {
  height: 100vh;
}

.main-view {
  position: absolute;
}
</style>
