import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../view/Home.vue";

const routes = [
  { path: "/", component: Home, children: [] },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
