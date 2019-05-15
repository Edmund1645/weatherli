<template>
  <div id="app">
    <img alt="Weatherli logo" src="./assets/logo.png">
    <Content msg="Weatherli is Coming soon.."/>
  </div>
</template>

<script>
import Content from './components/Content.vue';

export default {
  name: 'app',
  components: {
    Content
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
