<template lang="">
  <main>
      <div v-for="travel in travels" :key="travel.id">
          <TravelCard :travel="travel" />
      </div>
  </main>
</template>

<script>
import axios from 'axios';
import TravelCard from './TravelCard.vue';

export default {
  data(){
      return{
          serverUrl: 'http://127.0.0.1:8000',
          travels: [],
      };
  },

  created() {
    axios.get(`${this.serverUrl}/admin/travels`)
  .then((resp) => {
    this.travels = resp.data.results;
  })
  .catch((error) => {
    console.error('Error fetching data:', error.response ? error.response.data : error.message);
  });
  },
  components: {
      TravelCard
  }
}
</script>

<style lang="scss" scoped>
  main{
      display: flex;
      align-items: start;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 0 auto;
      // background-color: red;
  }
</style>