<script>
import TravelCard from "./TravelCard.vue";

export default {
  data() {
    return {};
  },
  components: { TravelCard },
};
</script>

<template>
  <AppHeader />

  <router-view></router-view>
</template>

<style lang="scss">
// @use "./styles/general.scss";
body {
  background-color: #060500;
}
</style>