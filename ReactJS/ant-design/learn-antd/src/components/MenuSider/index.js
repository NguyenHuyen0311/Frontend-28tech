import { Menu } from "antd";
import { DashboardOutlined, LayoutOutlined, AppstoreOutlined, PieChartOutlined, FileOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function MenuSider() {
    const items = [
        {
            label: "Dashboard",
            icon: <DashboardOutlined />,
            key: "menu-1",
            children: [
                {
                    label: <Link to="/">Dashboard</Link>,
                    key: "/"
                },
                {
                    label: "Menu 1 - 2",
                    key: "menu-1-2"
                },
                {
                    label: "Menu 1 - 3",
                    key: "menu-1-3"
                },
            ]
        },
        {
            label: "Apps",
            icon: <AppstoreOutlined />,
            key: "menu-2",
            children: [
                {
                    label: "Menu 2 - 1",
                    key: "menu-2-1"
                },
                {
                    label: "Menu 2 - 2",
                    key: "menu-2-2"
                },
                {
                    label: "Menu 2 - 3",
                    key: "menu-2-3"
                },
            ]
        },
        {
            label: <Link to="/book-room">Book Room</Link>,
            icon: <LayoutOutlined />,
            key: "/book-room"
        },
        {
            label: <Link to="/create-room">Create Room</Link>,
            icon: <PieChartOutlined />,
            key: "/create-room"
        },
        {
            label: <Link to="/list-room">List Room</Link>,
            icon: <FileOutlined />,
            key: "/list-room"
        },
        {
            label: "Authentication",
            icon: <LockOutlined />,
            key: "menu-6"
        },
    ];

    return (
        <>
            <Menu
                mode="inline"
                items={items}
                defaultSelectedKeys={["/"]}
                defaultOpenKeys={["menu-1"]}
            />
        </>
    );
}

export default MenuSider;