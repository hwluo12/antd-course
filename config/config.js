export default {
  singular: true,
  plugins: [
    [
      "umi-plugin-react",
      {
        antd: true,
        dva: true,
        locale: {
          enable: true
        }
      }
    ]
  ],
  // theme: {
  //   "@primary-color": "#30b767"
  // },
  routes: [
    {
      path: "/",
      component: "../layout",
      routes: [
        {
          path: "/",
          component: "./index"
        },
        {
          path: "/helloworld",
          component: "./helloworld"
        },
        {
          path: "/puzzlecards",
          component: "./puzzlecards"
        },
        {
          path: "/list",
          component: "./list"
        },
        {
          path: "/dashboard",
          routes: [
            { path: "/dashboard/analysis", component: "./Dashboard/Analysis" },
            { path: "/dashboard/monitor", component: "./Dashboard/Monitor" },
            { path: "/dashboard/workplace", component: "./Dashboard/Workplace" }
          ]
        }
      ]
    }
  ],
  proxy: {
    "/api": {
      target: "http://localhost:3005",
      // changeOrigin: true
      pathRewrite: { "^/api": "" }
    }
  }
};
