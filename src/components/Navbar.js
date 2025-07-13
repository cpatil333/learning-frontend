import React from "react";
import "../styles/navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.toLowerCase();
  const token = localStorage.getItem("token") || "";

  if (!token && path !== "/login" && path !== "/register") {
    navigate("/login");
  }
  
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <nav>
        <ul>
          {token ? (
            <>
              <li>
                <Link to="/" className="li-Link">
                  Users
                </Link>
              </li>
              <li>
                <Link to="/course" className="li-Link">
                  Course
                </Link>
              </li>
              <li>
                <Link to="/course" className="li-Link">
                  Course Enrollments
                </Link>
              </li>
              <li>
                <Link to="/course" className="li-Link">
                  Lessons
                </Link>
              </li>
              <li>
                <Link to="/course" className="li-Link">
                  Quizs
                </Link>
              </li>
              <li>
                <Link to="/course" className="li-Link">
                  Questions
                </Link>
              </li>
              <li>
                <Link to="/course" className="li-Link">
                  Answers
                </Link>
              </li>
              <li>
                <Link to="/course" className="li-Link">
                  Discussion
                </Link>
              </li>
              <li>
                <Link to="/course" className="li-Link">
                  Comments
                </Link>
              </li>
              <li>
                <Link to="/course" className="li-Link">
                  Notifications
                </Link>
              </li>
              <li>
                <Link onClick={logout} className="li-Link">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/register" className="li-Link">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login" className="li-Link">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
