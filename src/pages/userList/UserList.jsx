import "./userList.css"
import { DataGrid} from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
//import {userRows} from "../../DemoData"
import React, {useState, useEffect} from "react";
import * as api from '../../api/index.js';

export default function UserList() {


    const[data,setData] = useState([]);

    useEffect(() => {
      const url = "http://localhost:5000/users";
  
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

    const handleDelete = (id)=>{
      
      setData(data.filter((item) => item.id !== id));
      api.removeUser(id);
    }

    const columns= [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params)=>{
          return(
            <div className="userListUser">
              <img className="userListImg" src={params.row.avatar} alt="" />
              {params.row.username}
            </div>
          )
        }},
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction $',
          width: 160,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell:(params)=>{
            return(
              <>
                <a href={"/user/"+params.row.id}>
                  <button className="userListEdit">Edit</button>
                </a>
                <DeleteOutline 
                className="userListDelete"
                onClick={()=> handleDelete(params.row.id)}
                />
              </>
            )
          }
        },


      ];
      
  return (
    <div className='UserList'>
      <div className="" style={{display:"flex", paddingBottom : 5, 
      justifyContent : "flex-end", paddingRight : 5}}>
      <a href="/newUser">
                <button className="userAddButton">Create</button>
            </a>  
      </div>

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
