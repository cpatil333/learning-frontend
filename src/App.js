import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./pages/Register";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
