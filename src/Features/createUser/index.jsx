import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "./slice";

function Users() {
  const [data, setData] = useState({
    name: "",
    salary: "",
    age: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(data);
    dispatch(actions.creatingUser(data));
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder="enter your name"
      />
      <br />
      <input
        type="text"
        name="salary"
        value={data.salary}
        onChange={handleChange}
        placeholder="enter you salary"
      />
      <br />
      <input
        type="text"
        name="age"
        value={data.age}
        onChange={handleChange}
        placeholder="enter your age"
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Users;

// {"name":"test","salary":"123","age":"23"}
