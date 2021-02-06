<template>
  <iframe
    v-if="planetName === 'Mercury'"
    src="https://solarsystem.nasa.gov/gltf_embed/2369"
    frameborder="0"
  />
  <iframe
    v-if="planetName === 'Venus'"
    src="https://solarsystem.nasa.gov/gltf_embed/2343"
    frameborder="0"
  />
  <iframe
    v-if="planetName === 'Earth'"
    src="https://solarsystem.nasa.gov/gltf_embed/2393"
    frameborder="0"
  />
  <iframe
    v-if="planetName === 'Mars'"
    src="https://solarsystem.nasa.gov/gltf_embed/2372"
    frameborder="0"
  />
  <iframe
    v-if="planetName === 'Jupiter'"
    src="https://solarsystem.nasa.gov/gltf_embed/2375"
    frameborder="0"
  />
  <iframe
    v-if="planetName === 'Saturn'"
    src="https://solarsystem.nasa.gov/gltf_embed/2355"
    frameborder="0"
  />
  <iframe
    v-if="planetName === 'Uranus'"
    src="https://solarsystem.nasa.gov/gltf_embed/2344"
    frameborder="0"
  />
  <iframe
    v-if="planetName === 'Neptune'"
    src="https://solarsystem.nasa.gov/gltf_embed/2364"
    frameborder="0"
    marginheight="0"
  />
</template>

<script>
export default {
  props: ["planetName"],
};
</script>

<style scoped lang="scss">
iframe {
  width: 35vw;
  height: 60vh;
  border-radius: 2vw;
}

@media (max-width: 700px) {
  iframe {
    width: 80vw;
    height: 50vh;
    border-radius: 2vw;
  }
}
</style>