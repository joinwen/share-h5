import Main from "@/layouts/route-view/Main";
const constantRoutes = [
  {
    path: "/",
    name: "Root",
    title: "索引",
    component: () =>
      import(/* webpackChunkName: "index" */ "@/views/index/Index"),
  },
  {
    path: "/odd-spread",
    name: "OddSpread",
    redirect: "/odd-spread/index",
    component: Main,
    title: "推广",
    children: [
      {
        path: "/odd-spread/index",
        name: "OddSpreadIndex",
        component: () =>
          import(
            /* webpackChunkName: "odd-spread" */ "@/views/odd-spread/src/odd-spread-index/OddSpreadIndex.vue"
          ),
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
            /* webpackChunkName: "odd-spread" */ "@/views/odd-spread/src/odd-spread-profile/OddSpreadProfile.vue"
          ),
        meta: {
          title: "我们是一个什么样的平台",
          isLogin: false,
        },
      },
    ],
  },
  {
    path: "/school",
    redirect: "/school/style",
    name: "School",
    title: "校园",
    component: Main,
    children: [
      {
        path: "/school/style",
        name: "SchoolStyle",
        component: () =>
          import(
            /* webpackChunkName: "school" */ "@/views/school/src/schoolStyle/schoolStyle.vue"
          ),
        meta: {
          title: "回忆校园",
          isLogin: false,
        },
      },
    ],
  },
  {
    path: "/air-fly",
    redirect: "/air-fly/home",
    name: "AirFly",
    title: "AirFly",
    component: Main,
    children: [
      {
        path: "/air-fly/home",
        name: "AirFlyHome",
        component: () =>
          import(
            /* webpackChunkName: "air-fly" */ "@/views/air-fly/src/home/Home.vue"
          ),
        meta: {
          title: "首页",
          isLogin: false,
        },
      },
      {
        path: "/air-fly/profile",
        name: "AriFlyProfile",
        component: () =>
          import(
            /* webpackChunkName: "air-fly" */ "@/views/air-fly/src/profile/Profile.vue"
          ),
        meta: {
          title: "介绍",
          isLogin: false,
        },
      },
    ],
  },
  {
    path: "/coffee",
    redirect: "/coffee/home",
    name: "Coffee",
    title: "咖啡",
    component: Main,
    children: [
      {
        path: "/coffee/home",
        name: "CoffeeHome",
        component: () =>
          import(
            /* webpackChunkName: "coffee" */ "@/views/coffee/src/home/Home.vue"
          ),
        meta: {
          title: "首页",
          isLogin: false,
        },
      },
      {
        path: "/coffee/profile",
        name: "CoffeeProfile",
        component: () =>
          import(
            /* webpackChunkName: "coffee" */ "@/views/coffee/src/order/Order.vue"
          ),
        meta: {
          title: "介绍",
          isLogin: false,
        },
      },
    ],
  },
  {
    path: "/bank-me",
    redirect: "/bank-me/home",
    name: "BankMe",
    title: "BankMe",
    component: Main,
    children: [
      {
        path: "/bank-me/home",
        name: "BankMeHome",
        component: () =>
          import(
            /* webpackChunkName: "bank-me" */ "@/views/bank-me/src/home/Home.vue"
          ),
        meta: {
          title: "首页",
          isLogin: false,
        },
      },
      {
        path: "/bank-me/introduction",
        name: "BankMeIntroduction",
        component: () =>
          import(
            /* webpackChunkName: "bank-me" */ "@/views/bank-me/src/introduction/Introduction.vue"
          ),
        meta: {
          title: "介绍",
          isLogin: false,
        },
      },
      {
        path: "/bank-me/privacy",
        name: "BankMePrivacy",
        component: () =>
          import(
            /* webpackChunkName: "bank-me" */ "@/views/bank-me/src/privacy/Privacy.vue"
          ),
        meta: {
          title: "隐私通知",
          isLogin: false,
        },
      },
      {
        path: "/bank-me/login",
        name: "BankMePrivacy",
        component: () =>
          import(
            /* webpackChunkName: "bank-me" */ "@/views/bank-me/src/login/Login.vue"
          ),
        meta: {
          title: "登录",
          isLogin: false,
        },
      },
      {
        path: "/bank-me/register",
        name: "BankMePrivacy",
        component: () =>
          import(
            /* webpackChunkName: "bank-me" */ "@/views/bank-me/src/register/Register.vue"
          ),
        meta: {
          title: "注册",
          isLogin: false,
        },
      },
    ],
  },
];
export { constantRoutes };
