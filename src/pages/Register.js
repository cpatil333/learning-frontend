import React, { useState } from "react";
import { USER_REGISTER } from "../apollo/Mutation";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import "../styles/common.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [register] = useMutation(USER_REGISTER, {
    onCompleted(register) {
      navigate("/");
    },
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await register({
        variables: {
          register: formData,
        },
      });
      if (data?.signup) {
        alert("Registered has been successfully!");
        navigate("/");
      } else {
        console.log("Registered failed");
      }
    } catch (error) {
      console.error("Registered Error ", error.message);
      alert("Registered Failed, Please enter proper data");
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
              placeholder="Full Name"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div>
            <select name="role" onChange={handleChange}>
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

export default Register;
