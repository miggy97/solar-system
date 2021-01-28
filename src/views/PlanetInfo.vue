<template>
  <div class="main-view">
    <CloseButton class="smaller" />
    <div class="content">
      <div class="centerTag">
        <div class="tag">
          <h1>{{ name }}</h1>
        </div>
      </div>
      <h3>{{ desc }}</h3>
    </div>
  </div>
</template>

<script>
import CloseButton from "../components/CloseButton.vue";

export default {
  components: {
    CloseButton,
  },
  data() {
    return {
      name: "",
      desc: "",
    };
  },
  created() {
    const planet = this.$route.params.id;
    const planetInfo = this.$store.getters.getPlanetInfo(planet);
    this.name = planetInfo.name;
    this.desc = planetInfo.desc;
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
}
.tag {
  background-color: white;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  border-radius: 5vh;
}

h1 {
  font-family: "Meteoric"; 
  font-size: 3vw;
  color: #000000;
}

</style>

