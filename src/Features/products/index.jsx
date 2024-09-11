import { useEffect, useState } from "react";
import { actions } from "./slice";
import { useSelector, useDispatch } from "react-redux";
import { App, Table } from "antd";

function Products() {
  const [newProduct, setNewProduct] = useState({
    title: "",
    name: "",
    price: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchProducts());
  }, [dispatch]);

  const { msg } = App.useApp();

  const data = useSelector((state) => {
    return state.products.products;
  });

  console.log("data", data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted --", newProduct);
    dispatch(actions.createProduct(newProduct));
  };

  const productCreated = useSelector((state) => {
    state.products.productCreated;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const column = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
  ];

  const newData = data.map((d) => ({
    title: d.title,
    name: d.body,
  }));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={newProduct.title}
        />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={newProduct.name}
        />
        <input
          type="text"
          name="price"
          onChange={handleChange}
          value={newProduct.price}
        />
        <button type="submit">creteProduct</button>
      </form>
      {JSON.stringify(data)}
      <Table dataSource={newData} columns={column}></Table>
    </div>
  );
}

export default Products;
