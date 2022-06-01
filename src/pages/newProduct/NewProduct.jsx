import "./newProduct.css"
import * as api from '../../api/index.js';
import React, { useState, useEffect } from 'react';

export default function NewProduct() {

  const [postData, setPostData] = useState({ status: 'Active' });


  //handling form submit
  const handleSubmit = (e) => {
    console.log(postData);

    if (postData.name === undefined || postData.price === undefined || postData.status === undefined ||
      postData.stock === undefined || typeof parseFloat(postData.price) != 'number') {

      alert("Check The Form !!");
    }
    else {
      try {
        api.createProduct(postData);
        alert("Successfully Added!!");
        formReset();
      }
      catch {
        console.log("Failed To Add");
      }

    }

  }
  //Resetting the form after successfull submit
  const formReset = () => {

    setPostData({});

    var input_fields = Array.from(document.querySelectorAll('input')).slice(0, 6);

    input_fields.forEach((el) => {
      el.value = "";
    });

  }
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Shoe" onChange={(e) => {
            setPostData({ ...postData, name: e.target.value })

          }} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="500" onChange={(e) => {
            setPostData({ ...postData, stock: e.target.value })

          }} />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="text" placeholder="$ 500" onChange={(e) => {
            setPostData({ ...postData, price: parseFloat(e.target.value) })

          }} />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active" onChange={(e) => {
            setPostData({ ...postData, status: e.target.value })

          }}>
            <option value="Active">Active</option>
            <option value="Suspended">Suspended</option>
          </select>
        </div>
        <button type="button" className="addProductButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
