let data = [
  {
    id: 1,
    name: "umi",
    desc: "极快的类 Next.js 的 React 应用框架。",
    url: "https://umijs.org"
  },
  {
    id: 2,
    name: "antd",
    desc: "一个服务于企业级产品的设计体系。",
    url: "https://ant.design/index-cn"
  },
  {
    id: 3,
    name: "antd-pro",
    desc: "一个服务于企业级产品的设计体系。",
    url: "https://ant.design/index-cn"
  }
];

export default {
  "get /api/cards": (req, res) => {
    setTimeout(() => {
      res.json({
        result: data
      });
    }, 200);
  },
  "post /api/addOne": (req, res) => {
    data.push({ ...req.body, id: data.length + 1 });
    setTimeout(() => {
      res.json({
        success: true
      });
    });
  }
};
