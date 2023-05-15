import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config";
import Alerter from "sweetalert2";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/api/auth/login`, {
        username: credentials.username,
        password: credentials.password,
      });

      const { authToken } = response.data;
      localStorage.setItem("authToken", authToken);
      // console.log(response.data);
      Alerter.fire({
        title: "Success!",
        text: "User Logged In Successfully",
        icon: "success",
        confirmButtonText: "Ok",
      });
      navigate("/");
    } catch (error) {
      console.error(error);
      Alerter.fire({
        title: "Failed!",
        text: "Enter valid credentials!",
        icon: "error",
        confirmButtonText: "Try again",
      });
    }
  };

  const onChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="container mt-3">
      <div className="row mt-md-5 d-flex justify-content-center align-items-center">
        <div className="mt-md-4 col-lg-12 col-xl-11">
          <div className="card text-black" style={{ borderRadius: "25px" }}>
            <div className="card-body p-md-1">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2">
                  <img
                    src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=626&ext=jpg&ga=GA1.1.1136721741.1678387249&semt=robertav1_2_sidr"
                    className="img-fluid"
                    alt="Login logo"
                  />
                </div>
                <div className="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Login
                  </p>

                  <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <div className="form-outline flex-fill mb-0">
                        <label
                          className="form-label fw-semibold"
                          htmlFor="form3Example4cd"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          id="form3Example4cd"
                          className="form-control shadow-none"
                          placeholder="johndoe123"
                          name="username"
                          value={credentials.username}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <div className="form-outline flex-fill mb-0">
                        <label
                          className="form-label fw-semibold"
                          htmlFor="form3Example4c"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4c"
                          className="form-control shadow-none"
                          name="password"
                          value={credentials.password}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="d-grid mb-4">
                      <button
                        className="btn btn-primary fw-semibold"
                        type="submi"
                      >
                        Login
                      </button>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <label
                        className="form-check-label fw-semibold"
                        htmlFor="form2Example3"
                      >
                        Don't have an account ?{" "}
                        <Link to="/register">Click here to Register</Link>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
