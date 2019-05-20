<template>
  <footer class="footer">
    <p>made with ☕ and Vue</p>
    <span>{{name}} - {{year}}</span>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    name: String
  },
  data() {
    let date = new Date();
    let year = date.getFullYear();
    return {
      year
    };
  }
};
</script>

<style scoped>
.footer {
  height: auto;
  width: 100vw;
  padding: 1rem;
  margin-top: 20px;
}
</style>
