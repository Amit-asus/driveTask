import { Layout, Table, Card, Button } from "antd";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;

const CompanyList = () => {
  const navigate = useNavigate();
  const data = [
    { key: "1", name: "Company A", address: "Address A" },
    { key: "2", name: "Company B", address: "Address B" },
    { key: "3", name: "Company C", address: "Address C" },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ padding: "24px", margin: 0 }}>
        <Card
          title="Company List"
          extra={
            <Button type="primary" onClick={() => navigate("/create-job")}>
              Create Company
            </Button>
          }
        >
          <Table dataSource={data} columns={columns} />
        </Card>
      </Content>
    </Layout>
  );
};

export default CompanyList;
