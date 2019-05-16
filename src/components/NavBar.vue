<template>
  <div class="nav-bar">
    <h2>{{name}}</h2>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    name: String
  }
};
</script>

<style scoped>
.nav-bar {
  height: auto;
  width: 100vw;
  background: var(--theme-color);
  color: #ffffff;
  padding: 1rem;
  box-shadow: 2px 0 8px #cacaca;
}
</style>
