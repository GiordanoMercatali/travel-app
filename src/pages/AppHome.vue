<template lang="">
    <div>
        <AppHeader/>
        <h2>Home</h2>
        <AppMain/>
        <!-- <router-link :to="{name: link}" class="nav-link">
            About
        </router-link> -->
    </div>

</template>

<script>
import AppMain from '../components/AppMain.vue';
import AppHeader from '../components/AppHeader.vue';
export default {
    data() {
    return {
    //   link: 'about',
    }
  },

  components: {
        AppMain,
        AppHeader
    }

}
</script>

<style lang="scss" scoped>
    span{
        color: red;
    }
</style>