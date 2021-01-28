<template>
  <div :class="{ centerTxt: isTag }">
    <div v-if="isTag" class="centerTag" :class="{ visible: hover }">
      <div class="tag">
        <h2>{{ planetName }}</h2>
      </div>
    </div>
    <img
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :src="require('@/assets/' + planetName + '.svg')"
      :alt="planetName"
    />
  </div>
</template>

<script>
export default {
  props: ["planetName", "isTag"],
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style scoped lang="scss">
.centerTxt {
  display: inline-block;
  align-items: center;
  text-align: center;
}

.centerTag {
  display: inline-block;
  visibility: hidden;
  transform: scale(0.5) translateY(3vh);
  opacity: 0;
  transition: 0.8s;
}

.visible {
  visibility: visible;
  transform: scale(1) translateY(0);
  opacity: 1;
}

.tag {
  background-color: white;
  padding-left: 0.8vw;
  padding-right: 0.8vw;
  height: 5vh;
  line-height: 5vh;
  margin-bottom: 2vh;
  border-radius: 3vh;
}

h2 {
  // font-family: "Source Code Pro", monospace;
  font-family: "Meteoric"; 
  font-size: 1.5vw;
  color: #000000;
}

img {
  width: 80%;
  height: auto;
  cursor: pointer;
  pointer-events: fill;
}
</style>