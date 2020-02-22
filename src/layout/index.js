import React, { Component } from "react";
import { Layout } from "antd";
import SiderMenu from "../components/SiderMenu/SiderMenu";
import { getMenuData } from "../common/menu";
import logo from "../assets/logo.svg";
import GlobalHeader from "../components/GlobalHeader";

const { Header, Footer, Content } = Layout;

class BasicLayout extends Component {
  render() {
    const { location, children } = this.props;
    return (
      <Layout>
        <SiderMenu logo={logo} menuData={getMenuData()} location={location} />
        <Layout>
          <Header
            style={{ background: "#fff", textAlign: "center", padding: 0 }}
          >
            <GlobalHeader
              currentUser={{
                name: "Serati Ma",
                avatar:
                  "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
                userid: "00000001",
                notifyCount: 12
              }}
            />
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
