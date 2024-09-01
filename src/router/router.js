import { createRouter, createWebHistory } from "vue-router";

import AppHome from "../pages/AppHome.vue";
import AppTravelPage from "../pages/AppTravelPage.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },

    {
      path: "/travels/:id",
      name: "travel-page",
      component: AppTravelPage,
    },
  ],
});

export default router;