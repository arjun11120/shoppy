import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchOutlined, UnorderedListOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  Table,
  Typography,
  Input,
  Button,
  Popconfirm,
  theme,
} from "antd";
import { Col, Row } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

import Dashboard from "./Dashboard";
import Order from "./Order";
import CommonPageHeader from "./CommonPageHeader";

import "../css/sidebar.css";
import bagIcon from "../assets/images/bag.png";
import conversationIcon from "../assets/images/conversation.png";
import dashboard from "../assets/images/dashboard.png";
import Graph from "../assets/images/Graph.png";
import inventory from "../assets/images/inventory.png";
import settings from "../assets/images/settings.png";
import CustomersIcon from "../assets/images/Customers.png";
import LogoutIcon from "../assets/images/Logout.png";

const items = [
  getItem(
    "Dashboard",
    "1",
    <img src={dashboard} width={20} height={20} preview={false} />
  ),
  getItem(
    "Orders",
    "2",
    <img src={bagIcon} width={20} height={20} preview={false} />
  ),
  getItem(
    "Customers",
    "3",
    <img src={CustomersIcon} width={20} height={20} preview={false} />
  ),
  getItem(
    "Inventory",
    "4",
    <img src={inventory} width={20} height={20} preview={false} />
  ),
  getItem(
    "Conversations",
    "5",
    <img src={conversationIcon} width={20} height={20} preview={false} />
  ),
  getItem(
    "Settings",
    "6",
    <img src={settings} width={20} height={20} preview={false} />
  ),
];

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedOption, setSelectedOption] = useState("1");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleMenuClick = ({ key }) => {
    setSelectedOption(key);
  };
  const getContent = () => {
    switch (selectedOption) {
      case "1":
        return <Dashboard />;
      case "2":
        return <Order />;
      default:
        return null;
    }
  };
  return (
    <>
      <Layout
        style={{
          minHeight: "50vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          style={{
            background: "#fff",
          }}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <h2 className="d-flex align-items-center">
            <img
              src={Graph}
              width={30}
              height={30}
              preview={false}
              className="logout-icon"  
            />
            {!collapsed && "Metrix"}
          </h2>
          <Menu
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            onClick={handleMenuClick}
          />
          <div className="sidebar-bottom">
            <Button
              icon={
                <img src={LogoutIcon} width={20} height={20} preview={false} />
              }
              type="link"
              style={{ color: "#d57b7b", marginLeft: "25px"}}
            >
              {!collapsed && "Logout" }
            </Button>
          </div>
        </Sider>
        <Content
          style={{
            width: "100%",
          }}
        >
          <Layout>
            <Header className="p-0">
              <CommonPageHeader/>
            </Header>
            <Content
              style={{
                margin: "0 16px",
              }}
            >
              <Breadcrumb
                style={{
                  margin: "16px 0",
                }}
              >
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{
                  minHeight: 360,
                  borderRadius: borderRadiusLG,
                }}
              >
                {getContent()}
              </div>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </>
  );
};

export default SideBar;