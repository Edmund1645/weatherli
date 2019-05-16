<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="weather-card"></div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weather-card {
  width: 90%;
  margin: auto;
  margin-top: 10px;
  height: 250px;
  box-shadow: 0px 0px 8px #cacaca;
  border-radius: 10px;
}
</style>
