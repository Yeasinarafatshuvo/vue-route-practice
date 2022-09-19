<template>
  <h1>{{ profile }}This is Profile Page</h1>
  <p>{{ id }}</p>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  data() {
    return {
      profile: "",
      id: this.$route.params.name,
    };
  },
  mounted() {
    const route = useRoute();
    this.profile = route.params.name;
  },
};
</script>

<style scoped></style>
