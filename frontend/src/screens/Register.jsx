import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config";
import Alerter from "sweetalert2";

export const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/api/auth/register`, {
        name: credentials.name,
        email: credentials.email,
        username: credentials.username,
        password: credentials.password,
      });
      console.log(response.data);
      Alerter.fire({
        title: "Success!",
        text: "User Registered Successfully",
        icon: "success",
        confirmButtonText: "Ok",
      });
      navigate("/login");
    } catch (error) {
      console.error(error);
      Alerter.fire({
        title: "Failed!",
        text: "Please enter valid details!",
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
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-12 col-xl-11">
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
                    Register
                  </p>

                  <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <div className="form-outline flex-fill mb-0">
                        <label
                          className="form-label fw-semibold"
                          htmlFor="form3Example1c"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="form3Example1c"
                          className="form-control shadow-none"
                          placeholder="Full Name"
                          name="name"
                          value={credentials.name}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <div className="form-outline flex-fill mb-0">
                        <label
                          className="form-label fw-semibold "
                          htmlFor="form3Example3c"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="form3Example3c"
                          className="form-control shadow-none"
                          placeholder="johndoe@gmail.com"
                          name="email"
                          value={credentials.email}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </div>

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
                          placeholder="johndoe12"
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
                        type="submit"
                      >
                        Register
                      </button>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <label
                        className="form-check-label fw-semibold"
                        htmlFor="form2Example3"
                      >
                        Already have an account ?{" "}
                        <Link to="/login">Click here to Login</Link>
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
