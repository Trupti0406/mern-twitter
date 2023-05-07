import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-light d-flex sticky-top">
      <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
        <Link
          to="/"
          className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-primary text-decoration-none"
        >
          <span className="fs-1">
            <i className="fa-brands fa-twitter"></i>
          </span>
        </Link>
        <ul
          className="nav  flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start"
          id="pills-tab"
        >
          <li className="nav-item mb-sm-3 ">
            <NavLink
              to="/"
              className="nav-link px-sm-0 px-2 text-black text-decoration-none"
            >
              <i className="fa-solid fa-house fs-5 ps-sm-3"></i>
              <span className="ms-1 d-none d-sm-inline fs-5">Home</span>
            </NavLink>
          </li>
          <li className="nav-item mb-sm-3">
            <NavLink
              to="/profile"
              className="nav-link px-sm-0 px-2 text-black text-decoration-none"
            >
              <i className="fa-solid fa-user fs-5 ps-sm-3"></i>
              <span className="ms-1 d-none d-sm-inline fs-5">Profile</span>
            </NavLink>
          </li>
          <li className="nav-item mb-sm-3">
            <NavLink
              to="/login"
              className="nav-link px-sm-0 px-2 text-black text-decoration-none"
            >
              <i className="fa-solid fa-right-from-bracket fs-5 ps-sm-3"></i>
              <span className="ms-1 d-none d-sm-inline fs-5">Logout</span>
            </NavLink>
          </li>
        </ul>
        <div className="py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
          <img
            src="https://github.com/mdo.png"
            alt="hugenerd"
            width="28"
            height="28"
            className="rounded-circle"
          />
          <span className="text-black fw-semibold d-none d-sm-inline mx-2">
            trupti_04
          </span>
        </div>
      </div>
    </div>
  );
};
