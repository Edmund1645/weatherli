<template>
  <div id="app">
    <NavBar :name="name"/>
    <div class="main">
      <img class="logo" alt="Weatherli logo" src="./assets/logo.png">
      <Content msg="Weatherli is Coming soon.."/>
    </div>
    <Footer :name="name"/>
  </div>
</template>

<script>
import Content from './components/Content.vue';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Content,
    NavBar,
    Footer
  },
  data() {
    return {
      name: 'Weatherli'
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
:root {
  --theme-color: #57dddd;
}
#app {
  font-family: Roboto, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  width: 90%;
  margin: auto;
  margin-top: 60px;
}
.logo {
  /* width: 50%; */
}
</style>
