import { Layout, Menu, Card } from "antd";
import {
  UserOutlined,
  FileTextOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../features/auth/authSlice";

const { Content, Sider } = Layout;

const AdminDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(actions.logout());
    navigate("/admin-login");
  };

  const handleMenuClick = (e) => {
    if (e.key === "2") {
      navigate("/company-list");
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={handleMenuClick}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            User Management
          </Menu.Item>
          <Menu.Item key="2" icon={<FileTextOutlined />}>
            Company
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="4" icon={<LogoutOutlined />} onClick={handleLogout}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: "0 24px", minHeight: 280 }}>
        <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
          <Card title="Admin Dashboard">
            <p>Welcome to your admin dashboard!</p>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
