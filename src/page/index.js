import Link from "umi/link";

export default () => (
  <div>
    <div>
      <Link to="/helloworld">欢迎页</Link>
    </div>
    <div>
      <Link to="/dashboard/analysis">分析页</Link>
    </div>
    <div>
      <Link to="/list">列表页</Link>
    </div>
  </div>
);
