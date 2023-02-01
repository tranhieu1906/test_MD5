import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
  });
  useEffect(() => {
    axios.get(`http://localhost:3001/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);
  const onChangeHandled = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setProduct({ ...product, [name]: value });
  };
  return (
    <div className="container w-25 shadow-sm p-3 mb-5 bg-body rounded mt-5">
      <h1>Edit Product</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Name"
        name="name"
        value={product.name}
        onChange={onChangeHandled}
      />
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="Enter Price"
        name="price"
        value={product.price}
        onChange={onChangeHandled}
      />
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="Enter Stock"
        name="stock"
        value={product.stock}
        onChange={onChangeHandled}
      />
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="Enter Description"
        name="description"
        value={product.description}
        onChange={onChangeHandled}
      />
      <br />
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => {
          axios.put(`http://localhost:3001/products/${id}`, product);
          navigate("/");
        }}
      >
        Update
      </button>
    </div>
  );
}
