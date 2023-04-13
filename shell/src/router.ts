import { createRouter, createWebHistory } from "vue-router";
import { app2Routes } from "app2/routes";

export const router = createRouter({
	history: createWebHistory(),
	linkActiveClass: "active",
	routes: [
    { path: '/home', alias: '/', component: () => import("./views/Home.vue") },
    ...app2Routes,
    { path: '/app3', component: () => import("./views/App3.vue") },
  ],
});