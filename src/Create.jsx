import React, {  useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();
    const [createData, setCreateData] = useState({
      id: "",
      username: "",
      email: "",
      address: "",
      phone: "",
    });
    const handleChange=(e)=>{
        const{name,value}=e.target
        setCreateData((preData)=>({
          ...preData,[name]:value
        }))
     }
     const handleFormSubmit=async()=>{
        
         await axios.post(`https://660ea473356b87a55c4fa6c4.mockapi.io/api/UserDetails`,createData)
         .then(res=>console.log(res.data))
         .catch((err)=>console.log(err))
         navigate("/userDetails")
     }
    return (
        <>
      <h1 className="d-flex justify-content-center">Create Data</h1>
      <div className="container d-flex justify-content-center m-3 ms-5">
      <div className="border border-3 p-5 ms-5">
          <label className="mt-3 ms-4 text-primary">
            UserName:
            <input
              type="text"
              name="username"
              className="form-control"
              value={createData.username}
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label className="mt-3 ms-4 text-primary">
            Email:
            <input
              type="text"
              name="email"
              className="form-control"
              value={createData.email}
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label className="mt-3 ms-4 text-primary">
            Address:
            <input
              type="text"
              name="address"
              className="form-control"
              value={createData.address}
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label className="mt-3 ms-4 text-primary">
            Phone:
            <input
              type="text"
              name="phone"
              className="form-control"
              value={createData.phone}
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <button type="submit" className="btn btn-primary mt-4 ms-4" onClick={handleFormSubmit}>
            Create
          </button>
        </div>
      </div>
    </>
    );
};

export default Create;