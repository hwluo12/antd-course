import Link from "umi/link";
import { Button } from "antd";
import { FormattedMessage, formatMessage } from "umi-plugin-react/locale";
import myStyles from "./styles.less";

export default () => (
  <div className={myStyles.hello}>
    <div>
      <FormattedMessage id="helloworld" />
    </div>
    <div className={myStyles["override-ant-btn"]}>
      <Button type="primary">
        <Link to="/helloworld">{formatMessage({ id: "welcome" })}</Link>
      </Button>
    </div>
    <div className={myStyles["override-ant-btn"]}>
      <Button type="primary">
        <Link to="/dashboard/analysis">
          {formatMessage({ id: "analysis" })}
        </Link>
      </Button>
    </div>
    <div className={myStyles["override-ant-btn"]}>
      <Button type="danger">
        <Link to="/list">{formatMessage({ id: "listpage" })}</Link>
      </Button>
    </div>
  </div>
);
