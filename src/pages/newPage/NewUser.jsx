import "./newuser.css"
import * as api from '../../api/index.js';
import React, { useState, useEffect } from 'react';



export default function NewUser() {

    const [postData, setPostData] = useState({ status: 'suspended' });

    //handling form submit
    const handleSubmit = (e) => {
        console.log(postData);

        if (postData.username === undefined || postData.email === undefined || postData.status === undefined ||
            postData.username === "" || postData.email === "") {

            alert("Complete The Form !!");
        }
        else {
            try {
                api.createUser(postData);
                alert("Successfully Added!!");
                formReset();
            }
            catch {
                console.log("Failed To Add");
            }

        }

    }
//Resetting the form after successfull submit
    const formReset = ()=>{

        setPostData({});

        var input_fields = Array.from(document.querySelectorAll('input')).slice(0,6);

        input_fields.forEach((el)=>{
            el.value ="";
        });

    }

    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="John" onChange={(e) => {
                        setPostData({ ...postData, username: e.target.value })

                    }} />
                </div>

                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Smith" />
                </div>

                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="John@gmail.com"
                        onChange={(e) => {
                            setPostData({ ...postData, email: e.target.value })

                        }} />
                </div>

                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                </div>

                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+90 000 000 00 00" />
                </div>

                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="Ankara/Turkey" />
                </div>

                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="Male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active" onChange={(e) => {
                        setPostData({ ...postData, status: e.target.value })
                        console.log(e.target.value);
                    }}>
                        <option value="active">Active</option>
                        <option value="suspended">Suspended</option>

                    </select>
                </div>
            </form>
            <button className="newUserButton" onClick={handleSubmit}>Create</button>

        </div>
    );
}
