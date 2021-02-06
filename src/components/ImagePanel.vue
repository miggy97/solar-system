<template>
  <div class="panel">
    <img
      :src="require('@/assets/' + planetName + 'IMG1.jpg')"
      :alt="planetName"
    />
    <img
      :src="require('@/assets/' + planetName + 'IMG2.jpg')"
      :alt="planetName"
    />
    <img
      :src="require('@/assets/' + planetName + 'IMG3.jpg')"
      :alt="planetName"
    />
  </div>
</template>

<script>
export default {
  props: ["planetName"],
};
</script>

<style scoped lang="scss">
.panel {
  width: 35vw;
  height: 30vw;
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
  img {
    width: 33vw;
    height: auto;
    border-radius: 10px;
  }
}

@media (max-width: 700px) {
  .panel {
    width: 80vw;
    height: 50vh;
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
    img {
      width: 77vw;
      height: auto;
      border-radius: 10px;
    }
  }
}
</style>