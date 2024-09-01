<script>
export default {
  data() {
    return {
      baseUrl: `http://127.0.0.1:8000/`,
    };
  },
  props: {
    cocktail: Object,
  },
};
</script>

<template>
  <div class="card text-center mb-3">
    <div class="card-body">
      <h5>{{ cocktail.name }}</h5>
      <div class="img mb-2">
        <img :src="`${cocktail.image}`" alt="" />
      </div>
      <div class="info">
        <router-link
          :to="{ name: 'single-cocktail', params: { id: cocktail.id } }"
          class="btn btn-primary mt-2"
          >Details</router-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-body {
  img {
    max-width: 100%;
  }
}
</style>