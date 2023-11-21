import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom'
import './UserTable.css'
function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userId:"",
    userName: "",
    emailId: "",
    mblNumber: ""
  })
  const {  userId ,userName, emailId, mblNumber } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    loadUsers();
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(id);
    await axios.put(`http://localhost:8080/updateUsers/${id}`, user);
    alert("Updated Successfully..!");
    navigate('/');
  }
  const loadUsers = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/users/${id}`)
      setUser(result.data);
    } catch (error) {
      console.error('Error loading users:', error.message);
    }

  }

  return (
    <div className='user-register'>
      <form onSubmit={(e) => onSubmit(e)}>
        <h3>Edit User Registration Form</h3>
        <label for="username">User Id:</label>
        <input type="text"
          value={userId}
          id="userId"
          name="userId"
          readOnly
          onChange={(e) => onInputChange(e)}
        />
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

export default EditUser