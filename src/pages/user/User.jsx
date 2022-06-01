import "./user.css";
import * as api from '../../api/index.js';
import React, { useState, useEffect } from 'react';
import { CalendarToday, PhoneAndroid, MailOutline, PermIdentity, LocationSearching, Publish, AirplanemodeActive } from "@material-ui/icons"
//import { Link } from "react-router-dom"
export default function User() {


    const [postData, setPostData] = useState({  });

    useEffect(() => {
        const url = `http://localhost:5000/users/${window.location.href.split('user/')[1]}`;
        //editData?.id && setPostData(editData)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        api.fetchUserById(url).then(res => {
            setPostData(res?.data);
        });

    }, []);

    const handleSubmit = (e) => {
        console.log(postData);

        if (postData.username === undefined || postData.email === undefined || postData.status === undefined ||
            postData.username === "" || postData.email === "") {

            alert("Complete The Form !!");
        }
        else {
            try {
                console.log(postData);
                api.updateUser(postData);
                alert("Successfully Added!!");

            }
            catch {
                console.log("Failed To Add");
            }

        }

    }


    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <a href="/newUser">
                    <button className="userAddButton">Create</button>
                </a>
            </div>

            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src={postData?.avatar || "https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png"} alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">{postData?.username}</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>

                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">{postData?.username}</span>
                        </div>

                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">23.03.2000</span>
                        </div>

                        <span className="userShowTitle">Contact Details</span>

                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+90 552 376 82 90</span>
                        </div>

                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">{postData?.email}</span>
                        </div>

                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">Mezitli/Mersin Turkey</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdatItem">
                                <label>Username</label>
                                <input type="text" placeholder={postData?.username || "Username"} className="userUpdateInput"
                                    onChange={(e) => {
                                        setPostData({ ...postData, username: e.target.value })
                                        
                                    }}></input>
                            </div>

                            <div className="userUpdatItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="John Doe" className="userUpdateInput"></input>
                            </div>

                            <div className="userUpdatItem">
                                <label>Phone</label>
                                <input type="text" placeholder="+90 xxx xxx xx xx" className="userUpdateInput"></input>
                            </div>

                            <div className="userUpdatItem">
                                <label>Email</label>
                                <input type="text" placeholder={postData?.email || "Email"} className="userUpdateInput"
                                onChange={(e) => {
                                    setPostData({ ...postData, email: e.target.value })
                                    
                                }}></input>
                            </div>

                            <div className="userUpdatItem">
                                <label>Address</label>
                                <input type="text" placeholder="Mezitli/Mersin Turkey" className="userUpdateInput"></input>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src={postData?.avatar || "https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png"} alt="" className="userUpdateImg" />
                                <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                                <input type="file" id="file" style={{ display: "none" }}
                                onChange={(e)=>{
                                    try{
                                        let imgEl = document.querySelector('.userUpdateImg');
                                        imgEl.src = URL.createObjectURL(e.target.files[0]);
                                    }
                                    catch{
                                        console.log("Select A Suitable Pic");
                                    }
                          

                                }}
                                ></input>
                            </div>
                            <button className="userUpdateButton" onClick={handleSubmit}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
