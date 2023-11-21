import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
function UserTable() {

    const [user, setUser] = useState([]);
    const { id } = useParams();
    const loadUsers = async () => {
        axios.get("http://localhost:8080/users").then((response) => {
            setUser(response.data);
        })

    }
   
    const deleteUsers = async (id) => {
        const isConfirmed = window.confirm("Confirm to delete?");
        if(isConfirmed){
        axios.delete(`http://localhost:8080/users/${id}`)
        .then(response => {
            console.log('Response:', response);
            loadUsers();
          })
          .catch(error => {
            console.error('Error:', error);
          });
        }
    }
    useEffect(() => {
        loadUsers();
    }, [])
    return (
        <>
            <div className='table-wrapper'>
                <table>
                    <thead>
                        <tr>
                            <th>UserId</th>
                            <th>UserName</th>
                            <th>EmailId</th>
                            <th>Mobile Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((user, i) => {
                            return <tr key={i}>
                                <td>{user.userId}</td>
                                <td>{user.userName}</td>
                                <td>{user.emailId}</td>
                                <td>{user.mblNumber}</td>
                                <td>
                                    <Link className='view-btn' to={"/viewUser"}>View</Link>
                                    <Link className='edit-btn' to={`/editUser/${user.userId}`} >Edit</Link>
                                    <button onClick={()=>deleteUsers(user.userId)} className='delete-btn'>Delete</button>
                                </td>
                            </tr>

                        })}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserTable