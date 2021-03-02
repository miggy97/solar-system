<template>
  <div>
    <section>
      <a @click="closeImage" class="close"></a>
      <img
        :src="require('@/assets/' + planetName + 'IMG' + num + '.jpg')"
        alt="jupiter"
      />
    </section>
  </div>
</template>

<script>
export default {
  props: ["planetName", "num"],
  methods: {
    closeImage() {
      this.$emit("closeImage");
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  position: absolute;
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

section {
  position: relative;
}

img {
  height: 90vh;
  width: auto;
  border-radius: 20px;
  border: 3px solid white;
}
.close {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 38px;
  height: 38px;
  border-radius: 50%;

  &::before,
  &::after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: #fff;
  }

  &:hover {
    background-color: white;
    &::before,
    &::after {
      position: absolute;
      left: 18px;
      top: 2px;
      content: " ";
      height: 33px;
      width: 2px;
      background-color: black;
    }
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
}

@media (max-width: 950px) {
  img {
    height: auto;
    width: 90vw;
    border: 3px solid white;
  }
}
</style>