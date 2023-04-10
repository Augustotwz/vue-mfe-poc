import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
	history: createWebHistory(),
	linkActiveClass: "active",
	routes: [
    { path: '/page1', alias: '/app2', component: () => import("./views/Page1.vue") },
    { path: '/page2', component: () => import("./views/Page2.vue") },
    { path: '/page3', component: () => import("./views/Page3.vue") },
  ],
});