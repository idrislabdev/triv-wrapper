export default [
  {
    path: "/",
    name: "page1",
    meta: {
      title: "Page 1",
      authRequired: true,
    },
    component: () => import("../pages/page-1.vue"),
  },
  {
    path: "/page-2",
    name: "page2",
    meta: {
      title: "Page 2",
      authRequired: true,
    },
    component: () => import("../pages/page-2.vue"),
  },
  {
    path: "/page-3",
    name: "page3",
    meta: {
      title: "Page 3",
      authRequired: true,
    },
    component: () => import("../pages/page-3.vue"),
  },
  {
    path: "/page-4",
    name: "page4",
    meta: {
      title: "Page 4",
      authRequired: true,
    },
    component: () => import("../pages/page-4.vue"),
  },
  {
    path: "/page-5",
    name: "page5",
    meta: {
      title: "Page 5",
      authRequired: true,
    },
    component: () => import("../pages/page-5.vue"),
  },
  {
    path: "/page-6",
    name: "page6",
    meta: {
      title: "Page 6",
      authRequired: true,
    },
    component: () => import("../pages/page-6.vue"),
  }
];