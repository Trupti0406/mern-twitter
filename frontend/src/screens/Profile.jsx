import React from "react";
import { Sidebar } from "../components/Sidebar";
import { TweetCard } from "../components/TweetCard";
import { ProfileBio } from "../components/ProfileBio";

export const Profile = () => {
  return (
    <div className="container-fluid overflow-hidden">
      <div className="vh-100 row overflow-auto">
        <Sidebar />
        <div className="col d-flex flex-column h-sm-100">
          <nav className="top-0 navbar d-flex justify-content-between">
            <span className="navbar-brand mb-0 h1 fw-bolder fs-3">Explore</span>
          </nav>

          <div className="col-8 d-flex flex-column justify-content-center  pt-5 mx-auto">
            <ProfileBio />
            <TweetCard />
          </div>
        </div>
      </div>
    </div>
  );
};
