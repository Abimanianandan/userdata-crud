import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    id: "",
    username: "",
    email: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`https://660ea473356b87a55c4fa6c4.mockapi.io/api/UserDetails/${id}`)
      .then((res) => setEditData(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const handleFormSubmit = async () => {
    
    await axios
      .put(
        `https://660ea473356b87a55c4fa6c4.mockapi.io/api/UserDetails/${id}`,
        editData
      )
      .then((res) => setEditData(res.data))
      .catch((err) => console.log(err));
    navigate("/userDetails");
  };

  return (
    <>
      <h1 className="d-flex justify-content-center">Edit Data</h1>
      <div className="container d-flex justify-content-center m-3 ms-5">
        <div className="border border-3 p-5 ms-5">
          <label className="mt-3 ms-4 text-primary">
            UserName:
            <input
              type="text"
              name="username"
              className="form-control"
              value={editData.username}
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
              value={editData.email}
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
              value={editData.address}
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
              value={editData.phone}
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <button type="submit" className="btn btn-primary mt-4 ms-4" onClick={handleFormSubmit}>
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default Edit;
