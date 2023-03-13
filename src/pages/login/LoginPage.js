import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginStyle.css";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const info = { username: userName, password: password };
    console.log("info", info);
    event.preventDefault();
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="container min-vh-100 d-flex align-items-center">
      <div className="row">
        <div className="col-md-6">
          <img
            src={require("../../assets/login.png")}
            alt="login"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-md-12 col-lg-9 col-xl-8 shadow p-5">
              <div className="mb-4">
                <h3 className="text-center">Sign In</h3>
              </div>
              <form action="" onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-5">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary px-3 mb-3 w-100"
                  >
                    Log In
                  </button>
                </div>
                <div className="d-flex mb-3 justify-content-center">
                  <span>
                    <a
                      href="#"
                      className="forgot-pass text-decoration-none text-primary"
                    >
                      Forgot Password ?
                    </a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
