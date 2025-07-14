import React from "react";
import "../styles/common.css";
import { USER_LIST } from "../apollo/Queries";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(USER_LIST);

  if (loading) return <p>Loading....</p>;
  if (error) {
    console.log("Error fetching data ", error.message);
  }
  if (data.users.length === 0) {
    return <p>No data available!</p>;
  }

  return (
    <div className="container">
      <h1>User List</h1>
      <div>
        <button onClick={() => navigate("/register")}>Add User</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th style={{ width: "450px" }}>Full Name</th>
            <th>email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  className="btn-edit"
                  onClick={() => navigate(`/edit-user/` + user.id)}
                >
                  Edit
                </button>
                <button className="btn-delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
