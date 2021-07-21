const constantRoutes = [
  {
    path: "/",
    name: "Root",
    component: () => import("@/views/test/Test"),
  },
];
export { constantRoutes };
