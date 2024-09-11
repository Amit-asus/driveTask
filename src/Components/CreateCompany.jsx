import { Layout, Form, Input, Button  } from "antd";
import { useNavigate } from "react-router-dom";



const { Content } = Layout;

const CreateCompany = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values from form: ", values);
    navigate("/"); // Navigate back to the company list or another page
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ padding: "24px", margin: 0 }}>
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          title="Title"
          subTitle="This is a subtitle"
        />
        <Form
          layout="vertical"
          onFinish={onFinish}
          style={{ maxWidth: 600, margin: "0 auto" }}
        >
          <Form.Item
            label="Company Name"
            name="name"
            rules={[
              { required: true, message: "Please input the company name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Company Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input the company description!",
              },
            ]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Company LinkedIn"
            name="linkedin"
            rules={[
              {
                required: true,
                message: "Please input the company LinkedIn profile!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Company Link"
            name="link"
            rules={[
              { required: true, message: "Please input the company link!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default CreateCompany;
