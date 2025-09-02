"use client";

import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];
const AntdSider = Layout.Sider;

export default function Sider() {
  const pathname = usePathname();
  const router = useRouter();

  const [collapsed, setCollapsed] = useState(false);

  const items: MenuItem[] = [
    { label: "Home Page", key: "/home", icon: <HomeOutlined /> },
    { label: "About", key: "/about", icon: <UserOutlined /> },
  ];

  const onItemClick: MenuProps["onClick"] = (item) => {
    router.push(item.key);
  };

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  const fullWidth = 200;
  const collapsedWidth = 49;

  return (
    <AntdSider
      className="M-sider"
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth={collapsedWidth}
      width={fullWidth}
    >

      <div className="sider-main">
        <Menu
          mode="inline"
          selectedKeys={[pathname]}
          items={items}
          className="sider-menu"
          onClick={onItemClick}
        ></Menu>

        <div
          className="sider-footer"
          onClick={onCollapse}
          style={{ color: "#ffffff" }}
        >
          {" "}
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      </div>
    </AntdSider>
  );
}
