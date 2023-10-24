import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("https://northwind.vercel.app/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const deleteProduct = (id) => {
    setLoading(true);
    axios
      .delete(`https://northwind.vercel.app/api/products/${id}`)
      .then((res) => {
        getProducts();
        setLoading(false);
      });
  };

  const sortedProducts = [...products].sort((a, b) => a.id - b.id);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th className="green-header">Id</th> {}
              <th className="green-header">Name</th> {}
              <th className="green-header">Unit Price</th> {}
              <th className="green-header">Units In Stock</th> {}
              <th className="green-header">Delete</th> {}
            </tr>
          </thead>
          <tbody>
            {sortedProducts &&
              sortedProducts.map((item) => {
                return (
                  <tr key={item.id} style={{ background: item.unitsInStock === 0 ? "tomato" : "white" }}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.unitPrice}</td>
                    <td>{item.unitsInStock}</td>
                    <td>
                      <button onClick={() => deleteProduct(item.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default ProductList;
