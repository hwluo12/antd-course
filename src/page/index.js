import Link from "umi/link";
import { Button } from "antd";
import myStyles from "./styles.less";

export default () => (
  <div className={myStyles.hello}>
    <div className={myStyles["override-ant-btn"]}>
      <Button type="primary">
        <Link to="/helloworld">欢迎页</Link>
      </Button>
    </div>
    <div className={myStyles["override-ant-btn"]}>
      <Button type="primary">
        <Link to="/dashboard/analysis">分析页</Link>
      </Button>
    </div>
    <div className={myStyles["override-ant-btn"]}>
      <Button type="danger">
        <Link to="/list">列表页</Link>
      </Button>
    </div>
  </div>
);
