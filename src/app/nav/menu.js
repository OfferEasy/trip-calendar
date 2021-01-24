import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const NavMenu = () => {
    return (
        <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                    <Link to="/">Trip List</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="tripModify">Trip Modify</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default NavMenu;