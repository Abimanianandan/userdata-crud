import React, { useEffect, useState } from "react";
import axios from 'axios'

const Home = () => {
   const[userData,setUserData]=useState([])

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData=async()=>[
       await axios.get('https://660ea473356b87a55c4fa6c4.mockapi.io/api/UserDetails')
       .then(res=>setUserData(res.data))
       .catch((err)=>console.log(err))
  ]
  
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {userData.map((item, index) => {
          return (
            <>
            <div key={index}>
              <div className="col">
                <div className="card">
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="fw-bold">Id:     {item.id}</p>
                    <p className="fw-bold">UserName:    {item.username}</p>
                    <p className="fw-bold">Email:     {item.email}</p>
                    <p className="fw-bold">Address:   {item.address}</p>
                    <p className="fw-bold">Phone:    {item.phone}</p>
                  </div>
                </div>
              </div>
            </div>
            </>
          );
        })}
      </div>
     </div>
  );
};

export default Home;
