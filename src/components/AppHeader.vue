<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="header d-flex justify-content-between">
    <!-- <img src="../assets/images/logo.jpeg" alt="" /> -->
    <nav class="my-auto me-3">
      <ul class="list-group list-group-horizontal">
        <li>
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'travels' }">Travels</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 15vh;
  background-color: #f5f3e7;
  border-bottom: 1px solid black;

  nav {
    li {
      list-style: none;
      padding: 1rem;

      a {
        text-decoration: none;
        color: black;
      }
    }
  }
}
</style>