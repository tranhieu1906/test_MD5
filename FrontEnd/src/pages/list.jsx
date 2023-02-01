import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function ListProduct() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      setList(response.data);
    });
  }, [list]);
  const DeleteStudent = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa!")) {
      axios.delete(`http://localhost:3001/products/${id}`).then(() => {
        axios.get("http://localhost:3001/products").then((response) => {
          setList(response.data);
        });
      });
    }
  };
  return (
    <div className="mx-3 shadow p-3 mb-5 bg-body rounded mt-5">
      <h1>Danh sách sản phẩm</h1>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => {
          navigate("/add");
        }}
      >
        Thêm sản phẩm
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>
                <Link to={`/detail/${item.id}`}>
                  <span className="">{item.name}</span>
                </Link>
              </td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>{item.description}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger me-3"
                  onClick={() => {
                    DeleteStudent(`${item.id}`);
                  }}
                >
                  Xoá
                </button>
                <button
                  type="button"
                  className="btn btn-outline-info"
                  onClick={() => {
                    navigate(`/product/${item.id}`);
                  }}
                >
                  Cập Nhật
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
