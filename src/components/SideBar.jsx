import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserAddOutlined, UnorderedListOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  Table,
  Typography,
  Input,
  Button,
  Popconfirm,
} from "antd";

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
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../css/sidebar.css";
import bagIcon from "../assets/images/bag.png";
import conversationIcon from "../assets/images/conversation.png";
import dashboard from "../assets/images/dashboard.png";
import Graph from "../assets/images/Graph.png";
import inventory from "../assets/images/inventory.png";
import settings from "../assets/images/settings.png";
import CustomersIcon from "../assets/images/Customers.png";

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
  const handleMenuClick = ({ key }) => {
    setSelectedOption(key);
  };
  return (
    <Container>
      <Layout
        style={{
          minHeight: "50vh"
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
           <img src={Graph} width={30} height={30} preview={false} className="m-3" />
           {!collapsed && "Metrix"}
          </h2>
          <Menu
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            onClick={handleMenuClick}
          />
        </Sider>
      </Layout>
      <div>
        
      </div>
    </Container>
  );
};

export default SideBar;
