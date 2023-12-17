export default [
  { path: "/", name: "home", meta: { title: "Page 1" }, component: () => import("../pages/page-1.vue") },
  { path: "/page-1", name: "page1", meta: { title: "Page 1" }, component: () => import("../pages/page-1.vue") },
  { path: "/page-2", name: "page2", meta: { title: "Page 2" }, component: () => import("../pages/page-2.vue") },
  { path: "/page-3", name: "page3", meta: { title: "Page 3" }, component: () => import("../pages/page-3.vue") },
  { path: "/page-4", name: "page4", meta: { title: "Page 4" }, component: () => import("../pages/page-4.vue") },
  { path: "/page-5", name: "page5", meta: { title: "Page 5" }, component: () => import("../pages/page-5.vue") },
  { path: "/page-6", name: "page6", meta: { title: "Page 6" }, component: () => import("../pages/page-6.vue") },
  { path: "/page-7", name: "page7", meta: { title: "Page 7" }, component: () => import("../pages/page-7.vue") },
  { path: "/page-8", name: "page8", meta: { title: "Page 8" }, component: () => import("../pages/page-8.vue") },
  { path: "/page-9", name: "page9", meta: { title: "Page 9" }, component: () => import("../pages/page-9.vue") },
  { path: "/page-10", name: "page10", meta: { title: "Page 10" }, component: () => import("../pages/page-10.vue") },
];