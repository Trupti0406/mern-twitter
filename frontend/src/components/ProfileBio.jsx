import React from "react";

export const ProfileBio = () => {
  return (
    <>
      <div
        className="border"
        style={{ height: "10em", backgroundColor: "#0d6efd" }}
      ></div>
      <div className="px-4 d-flex flex-column flex-md-row flex-md-row justify-content-between position-md-relative">
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/92917582?s=40&v=4"
            alt="hugenerd"
            width="120"
            height="120"
            className="rounded-circle profile-pic position-md-absolute"
          />
        </div>
        <div>
          <button className="btn btn-dark mb-0 h1 fw-bold px-5 py-2">
            Follow
          </button>
        </div>
      </div>
      <div className="px-4 d-flex flex-column mt-4">
        <p className="fs-5 fw-bold">Trupti Yadav</p>
        <p className="text-muted fw-bold">@trupti_04</p>
        <p>
          <span className="me-5">
            <i class="fa-solid fa-cake-candles"></i> Date of Birth: 4th June
          </span>
          <span className="ms-5 ms-md-0">
            <i class="fa-solid fa-location-dot"></i> Mumbai
          </span>
        </p>
        <p>
          <span>
            <i class="fa-regular fa-calendar"></i> Joined on: 8th May 2023
          </span>
        </p>
        <p className="fw-bold d-flex flex-column flex-md-row">
          <span className="me-5">20 Following</span>
          <span>15 Followers</span>
        </p>
      </div>
    </>
  );
};
