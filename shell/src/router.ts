import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { app2Routes } from "app2/routes";

export const routes: RouteRecordRaw[] = [
  { path: '/home', alias: '/', name: 'home', component: () => import("./views/Home.vue") },
  ...app2Routes,
  { path: '/app3', name: 'app3', component: () => import("./views/App3.vue") },
];


export const router = createRouter({
	history: createWebHistory(),
	linkActiveClass: "active",
	routes 
});