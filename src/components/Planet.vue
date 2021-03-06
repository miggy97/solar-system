<template>
  <div :class="{ centerTxt: isTag }">
    <div
      v-if="isTag && !isMobile"
      class="centerTag"
      :class="{ visible: hover }"
    >
      <div class="tag">
        <h2>{{ planetName }}</h2>
      </div>
    </div>
    <img
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :class="[
        { planetImg: !isEnlarge && !isSun },
        { planetImgEnlarge: isEnlarge },
        { sun: isSun },
      ]"
      :src="require('@/assets/' + planet + '.svg')"
      :alt="planetName"
    />
  </div>
</template>

<script>
export default {
  props: ["planetName", "planet" , "isTag", "isEnlarge"],
  data() {
    return {
      hover: false,
      isMobile: false,
    };
  },
  methods: {
    handleView() {
      this.isMobile = window.innerWidth <= 700;
    },
  },
  computed: {
    isSun() {
      if (this.planetName === "Sun") {
        return true;
      }
      return false;
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.handleView();
    });
  },
  created() {
    this.handleView();
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
  font-family: "Source Code Pro", monospace;
  font-weight: 400;
  font-size: 1.5vw;
  color: #000000;
}

.sun {
  width: 80%;
  height: auto;
  cursor: default;
  pointer-events: fill;
}
.planetImg {
  width: 80%;
  height: auto;
  cursor: pointer;
  pointer-events: fill;
}
.planetImgEnlarge {
  width: 85%;
  height: auto;
  cursor: pointer;
  pointer-events: fill;
}

@media (max-width: 700px) {
  .sun {
    width: 40%;
    height: auto;
    cursor: pointer;
    pointer-events: fill;
  }
  .planetImg {
    width: 50%;
    height: auto;
    cursor: pointer;
    pointer-events: fill;
  }
  .planetImgEnlarge {
    width: 50%;
    height: auto;
    cursor: pointer;
    pointer-events: fill;
  }
  .centerTxt {
    display: inline-block;
    align-items: center;
    text-align: center;
  }
}
</style>