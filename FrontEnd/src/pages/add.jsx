import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function AddProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
  });
  const onChangeHandled = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setProduct({ ...product, [name]: value });
  };
  return (
    <div className="container w-25 shadow-sm p-3 mb-5 bg-body rounded mt-5">
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Enter Name"
        name="name"
        value={product.name}
        className="form-control"
        onChange={onChangeHandled}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Price"
        name="price"
        value={product.price}
        className="form-control"
        onChange={onChangeHandled}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Stock"
        name="stock"
        value={product.stock}
        className="form-control"
        onChange={onChangeHandled}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Description"
        name="description"
        value={product.description}
        className="form-control"
        onChange={onChangeHandled}
      />
      <br />
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => {
          axios.post("http://localhost:3001/products", product);
          navigate("/");
        }}
      >
        Add
      </button>
    </div>
  );
}
