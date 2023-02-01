import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
export default function DetailProduct() {
  const { id } = useParams();
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
  return (
    <div className="container w-25 shadow-sm p-3 mb-5 bg-body rounded mt-5">
      <h1>Detail Product</h1>
      <span>name: {product.name} </span>
      <br />
      <span>price: {product.price} </span>
      <br />
      <span>stock: {product.stock} </span>
      <br />
      <span>description: {product.description} </span>
      <br />
    </div>
  );
}
