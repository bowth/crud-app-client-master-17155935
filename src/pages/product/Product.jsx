//import { Link } from "react-router-dom"
import "./product.css";
import * as api from '../../api/index.js';
import React, { useState, useEffect } from 'react';
import Chart from "../../components/charts/chartsProduct";
import { productData } from "../../DemoData"
import { Publish } from "@material-ui/icons";

export default function Product() {


    const [postData, setPostData] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/products/${window.location.href.split('product/')[1]}`;
        //console.log(url);
        //editData?.id && setPostData(editData)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        api.fetchProductById(url).then(res => {
            //console.log(res.data);
            setPostData(res?.data);
        });

    }, []);

    //handling form submit
    const handleSubmit = (e) => {
        console.log(postData);

        if (postData.name === undefined || postData.price === undefined || postData.status === undefined ||
            postData.stock === undefined || typeof parseFloat(postData.price) != 'number') {

            alert("Check The Form !!");
        }
        else {
            try {
                api.updateProduct(postData);
                alert("Successfully Updated!!");
                //formReset();
            }
            catch {
                console.log("Failed To Update");
            }

        }

    }

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <a href="/newProduct">
                    <button className="productAddButton">Create</button>
                </a>
            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="productInfoImg" />
                        <span className="prodcutName">{postData?.name || "Dummy"}</span>
                    </div>

                    <div className="productInfoBottom">


                        <div className="productInfoItem">
                            <span className="productInfoKey">Total Sales:</span>
                            <span className="productInfoValue">$15000.00</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Monthly Sales:</span>
                            <span className="productInfoValue">$500.00</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Status:</span>
                            <span className="productInfoValue">{postData?.status || "Suspended"}</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">In stock:</span>
                            <span className="productInfoValue">{postData?.stock > 0 ? "Yes" : "No" || "No"}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder={postData?.name || "Dummy"} onChange={(e) => {
                            setPostData({ ...postData, name: e.target.value })

                        }} />

                        <label>Stock</label>
                        <input type="text" placeholder={postData?.stock || 0} onChange={(e) => {
                            setPostData({ ...postData, stock: e.target.value })

                        }} />

                        <label>Unit Price $</label>
                        <input type="text" placeholder={postData?.price || 0} onChange={(e) => {
                            setPostData({ ...postData, price: parseFloat(e.target.value) })

                        }} />

                        <label>Status</label>
                        <select name="active" id="active" value={postData?.status}
                            onChange={(e) => {
                                setPostData({ ...postData, status: e.target.value })

                            }}>
                            <option value="Active">Active</option>
                            <option value="Suspended">Suspended</option>
                        </select>


                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                                className="productUploadImg" />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} onChange={(e) => {
                                try {
                                    let imgEl = document.querySelector('.productUploadImg');
                                    imgEl.src = URL.createObjectURL(e.target.files[0]);
                                }
                                catch {
                                    console.log("Select A Suitable Pic");
                                }


                            }} />
                        </div>
                        <button className="productButton" onClick={handleSubmit}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
