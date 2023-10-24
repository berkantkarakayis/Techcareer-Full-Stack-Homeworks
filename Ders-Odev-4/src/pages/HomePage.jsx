import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex", 
        flexDirection: "column"
       }}
    >
      <h1 style={{ marginTop: "250px" }}> HomePage </h1>
      <div
        style={{
          marginTop: "50px",
          gap: "100px",
          display: "flex",
          flexDirection: "row"     
        }}
      >
        <Link to="/products">Product List</Link>
        <Link to="/addproduct">Add Product</Link>
      </div>    
    </div>
  );
}

export default HomePage;
