export const app2Routes = [
  {
    path: '/app2',
    redirect: "/app2/page1",
    component: () => import("./App.vue"),
    children: [
      { path: 'page1', component: () => import("./views/Page1.vue") },
      { path: 'page2', component: () => import("./views/Page2.vue") },
      { path: 'page3', component: () => import("./views/Page3.vue") },
    ]
  },
];