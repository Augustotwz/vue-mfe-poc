import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
	history: createWebHistory(),
	linkActiveClass: "active",
	routes: [
    { path: '/home', alias: '/', component: () => import("./views/Home.vue") },
    { path: '/app2', component: () => import("./views/App2.vue") },
    { path: '/app3', component: () => import("./views/App3.vue") },
  ],
});