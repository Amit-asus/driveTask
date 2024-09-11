

import { Layout, Menu,  Card } from 'antd';
import { UserOutlined, FileTextOutlined, LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actions } from '../Features/auth/authSlice'; // Assuming you have a logout action

const {  Content, Footer, Sider } = Layout;

const UserDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(actions.logout());
    navigate('/login'); 
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} className="site-layout-background">
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
          <Menu.Item key="2" icon={<FileTextOutlined />}>
            Documents
          </Menu.Item>
          <Menu.Item key="3" icon={<LogoutOutlined />} onClick={handleLogout}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px', minHeight: 280 }}>
        <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
          <Card title="User Dashboard">
            <p>Welcome to your dashboard, User!</p>
            {/* Add more content here */}
          </Card>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2024 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default UserDashboard;
