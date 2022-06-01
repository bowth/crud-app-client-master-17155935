import "./productList.css";
import * as api from '../../api/index.js';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
//import {productRows} from "../../DemoData"
//import {Link} from "react-router-dom"
import { useState, useEffect } from "react";



export default function ProductList() {

  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/products";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    api.removeProduct(id);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
        return (
          <div className="ProductListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        )
      }
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <a href={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </a>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      }
    },


  ];

  return (

    <div className='UserList'>
      <a href="/newProduct" style={{display:"flex", paddingBottom : 5, 
      justifyContent : "flex-end", paddingRight : 5}}>
        <button className="productAddButton">Create</button>
      </a>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          disableSelectionOnClick columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
    </div>
  )
}
