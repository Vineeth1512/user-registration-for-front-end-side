import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import './UserTable.css'
function AddUser() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        userName: "",
        emailId: "",
        mblNumber: ""
    })
    const { userName, emailId, mblNumber } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/users", user);
        navigate('/');
    }
    return (
        <div className='user-register'>
            <form onSubmit={(e) => onSubmit(e)}>
                <h3>User Registration Form</h3>
                <label for="username">Username:</label>
                <input type="text" 
                value={userName}
                id="username"
                 name="userName" 
                 required
                 onChange={(e) => onInputChange(e)}
                />

                <label for="email">Email:</label>
                <input type="email"
                 id="email" 
                 name="emailId"
                  required
                  value={emailId}
                 onChange={(e) => onInputChange(e)}
                />

                <label for="mobile">Mobile Number:</label>
                <input type="tel"
                 id="mobile" 
                 name="mblNumber"
                  pattern="[0-9]{10}"
                   required
                   value={mblNumber}
                    onChange={(e) => onInputChange(e)}
                />

                <button className='edit-btn'>Submit</button>
                <Link className='delete-btn' to={'/'} >Cancel</Link>
            </form>
        </div>
    )
}

export default AddUser