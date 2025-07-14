import React, { useEffect, useState } from "react";
import { USER_UPDATE } from "../apollo/Mutation";
import { GET_USER_ID } from "../apollo/Queries";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/common.css";

const EditUser = () => {
  const navigate = useNavigate();
  const params = useParams();
  const userId = parseInt(params.id);
  const [formData, setFormData] = useState({});
  const { data: UserData } = useQuery(GET_USER_ID, {
    variables: {
      userById: userId,
    },
  });
  const [updateUser] = useMutation(USER_UPDATE, {
    onCompleted(register) {
      navigate("/");
    },
  });

  useEffect(() => {
    if (UserData?.userById) {
      setFormData({
        fullName: UserData?.userById.fullName,
        email: UserData?.userById.email,
        role: UserData?.userById.role,
      });
    }
  }, [UserData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateUser({
        variables: {
          updateRegister: {
            id: parseInt(params.id),
            ...formData,
          },
        },
      });
      if (data?.signup) {
        alert("Registered has been Updated!");
        navigate("/");
      } else {
        console.log("Registered update failed");
      }
    } catch (error) {
      console.error("Registered Error ", error.message);
      alert("Registered update Failed");
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <div className="sub-container">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              placeholder="Full Name"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
