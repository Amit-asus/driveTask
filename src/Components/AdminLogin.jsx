
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../Features/auth/authSlice";
import { Form, Input, Button, Alert, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const { user , isLoading, error } = useSelector((state) => state.auth);
  const navigate  = useNavigate() ;

  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    dispatch(
      actions.loginRequest({
        username: values.username,
        password: values.password,
        role: "admin",
      })
    );
  };


  useEffect(()=>{
     if(user)
     {
        if(user.role  === 'admin')
        {
          navigate('/admin-dashboard')
        }
     }
  },[user,navigate])


   

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Card title="Admin Login" style={{ width: 400 }}>
        <Form
          form={form}
          onFinish={handleSubmit}
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          {error && (
            <Form.Item>
              <Alert message={error} type="error" showIcon />
            </Form.Item>
          )}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              style={{ width: "100%" }}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AdminLogin;
