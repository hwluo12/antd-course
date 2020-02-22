import React from "react";
import {
  Input,
  Tooltip,
  Icon,
  Spin,
  Menu,
  Dropdown,
  Avatar,
  Button
} from "antd";
import styles from "./index.less";

class GlobalHeader extends React.Component {
  render() {
    const { currentUser = {} } = this.props;
    const menu = (
      <Menu className={styles.menu}>
        <Menu.Item disabled>
          <Icon type="user" />
          个人中心
        </Menu.Item>
        <Menu.Item disabled>
          <Icon type="setting" />
          设置
        </Menu.Item>
        <Menu.Item key="triggerError">
          <Icon type="close-circle" />
          触发报错
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />
          退出登录
        </Menu.Item>
      </Menu>
    );
    return (
      <div className={styles.header}>
        <div className={styles.right}>
          <Input
            className={`${styles.search} ${styles.action}`}
            style={{ width: 200, height: 32 }}
          />
          <Tooltip title="使用文档">
            <a
              href="http://www.baidu.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.action}
            >
              <Icon type="question-circle" />
            </a>
          </Tooltip>
          <span className={styles.action}>
            <Icon type="bell" />
          </span>
          {currentUser.name ? (
            <Dropdown overlay={menu}>
              <span className={`${styles.action} ${styles.account}`}>
                <Avatar
                  size="small"
                  src={currentUser.avatar}
                  className={styles.avatar}
                />
                <span className={styles.name}>{currentUser.name}</span>
              </span>
            </Dropdown>
          ) : (
            <Spin size="small" style={{ marginLeft: 8 }} />
          )}
          <Button size="small">中文</Button>
        </div>
      </div>
    );
  }
}

export default GlobalHeader;
