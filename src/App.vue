<template>
  <router-link to="/">Home</router-link><br />
  <router-link :to="{ name: 'Login' }">login</router-link><br />
  <router-link to="/profile/yeasin">Yeasin Profile</router-link><br />
  <router-link to="/profile/arafat">Arafat Profile</router-link><br />
  <router-link to="/new/url">Not Found</router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
