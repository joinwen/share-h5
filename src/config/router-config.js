import Main from "@/layouts/route-view/Main";
const constantRoutes = [
  {
    path: "/",
    name: "Root",
    component: () => import("@/views/index/Index"),
  },
  {
    path: "/odd-spread",
    name: "OddSpread",
    redirect: "/odd-spread/index",
    component: Main,
    children: [
      {
        path: "/odd-spread/index",
        name: "OddSpreadIndex",
        component: () =>
          import("@/views/odd-spread/src/odd-spread-index/OddSpreadIndex.vue"),
        meta: {
          title: "轻轻松松赚大钱",
          isLogin: false,
        },
      },
      {
        path: "/odd-spread/profile",
        name: "OddProfile",
        component: () =>
          import(
            "@/views/odd-spread/src/odd-spread-profile/OddSpreadProfile.vue"
          ),
        meta: {
          title: "我们是一个什么样的平台",
          isLogin: false,
        },
      },
    ],
  },
];
export { constantRoutes };
