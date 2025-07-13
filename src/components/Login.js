import React, { useState } from "react";
import "../styles/common.css";
import { USER_lOGIN } from "../apollo/Mutation";
import { setCredentials } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [login] = useMutation(USER_lOGIN, {
    onCompleted(login) {
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
    console.log(formData);
    try {
      const { data } = await login({
        variables: {
          userLogin: {
            email: formData.email,
            password: formData.password,
          },
        },
      });
      if (data?.login) {
        dispatch(
          setCredentials({
            user: {
              userId: data.login.userId,
              fullName: data.login.fullName,
              role: data.login.role,
            },
            token: data.login.token,
          })
        );
      } else {
        console.log("Invalid login credential!");
      }
    } catch (error) {
      console.error("Error Login ", error.message);
      alert("Login failed, Please try again!");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
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
              name="passowrd"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
