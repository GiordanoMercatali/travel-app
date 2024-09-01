import { createRouter, createWebHistory } from "vue-router";

import AppHome from "../pages/AppHome.vue";
// import SingleCocktailPage from "../pages/SingleCocktailPage.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },

    // {
    //   path: "/cocktails/:id",
    //   name: "single-cocktail",
    //   component: SingleCocktailPage,
    // },
  ],
});

export default router;