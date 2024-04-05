import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const UserDetails = ({setId}) => {
  const [userData, setUserData] = useState([]);
  const [deleteData,setDeleteData]=useState([]);
  const navigate=useNavigate();

  const handleEdit=(id)=>{
      setId(id)
      navigate(`/edit/${id}`)
  }

  const handleDelete=async(id)=>{
     await axios.delete(`https://660ea473356b87a55c4fa6c4.mockapi.io/api/UserDetails/${id}`)
     .then(res=>setDeleteData(res.data))
     .catch((err)=>console.log(err))
  }

  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => [
    await axios
      .get("https://660ea473356b87a55c4fa6c4.mockapi.io/api/UserDetails")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err)),
  ];
  return (
    <div className="container mt-5">
         <table class="table table-hover ">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">Phone</th>
          <button className="btn btn-success" >Edit</button>
          <button className="btn btn-danger ms-3">Delete</button>
        </tr>
      </thead>
      <tbody>
        {userData.map((item, index) => {
          return (
            <>
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>
                <button className="btn btn-success mt-3"onClick={()=>{handleEdit(item.id)}}>Edit</button>
                <button className="btn btn-danger ms-3 mt-3"onClick={()=>{handleDelete(item.id)}}>Delete</button>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
    </div>
  
  );
};

export default UserDetails;
