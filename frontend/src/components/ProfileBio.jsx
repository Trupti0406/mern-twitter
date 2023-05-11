import React from "react";

export const ProfileBio = () => {
  return (
    <>
      <div
        className="border"
        style={{ height: "10em", backgroundColor: "#0d6efd" }}
      ></div>
      <div className="row px-4 d-flex flex-column flex-md-row flex-md-row justify-content-between position-relative">
        <div className="col-12 col-md-3 d-flex justify-content-center">
          <img
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.1136721741.1678387249&semt=ais"
            alt="hugenerd"
            width="120"
            height="120"
            className="rounded-circle profile-pic position-absolute"
          />
        </div>
        <div className="col-12 col-md-9 mt-2 d-flex justify-content-center">
          {/* <button className="btn btn-dark mb-0 h1 fw-bold px-5 py-2">
            Follow
          </button> */}
          <button
            className="btn btn-primary mb-0 h1 fw-bold px-5 py-2 me-2"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop1"
          >
            Upload Profile Pic
          </button>
          <div
            class="modal fade"
            id="staticBackdrop1"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    Upload Profile Picture
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body d-flex justify-content-center flex-column">
                  <div>
                    <span className="fw-bold fs-5 me-2">Click here:</span>
                    <label for="inputField" class="btn">
                      <i class="fa-solid fa-image fs-3"></i>
                    </label>
                    <input
                      type="file"
                      id="inputField"
                      style={{ display: "none" }}
                    />
                  </div>

                  <div className="mt-2">
                    <img
                      src="https://pbs.twimg.com/media/FtdoBSuXgAEzb0-?format=jpg&name=small"
                      alt=""
                      className="img-fluid"
                      height="150"
                      width="150"
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save This Profile Pic
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="btn btn-dark mb-0 h1 fw-bold px-5 py-2"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop2"
          >
            Edit
          </button>
          <div
            class="modal fade"
            id="staticBackdrop2"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    Edit Profile
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label
                        for="user-name"
                        class="col-form-label fs-6 fw-semibold"
                      >
                        Name:
                      </label>
                      <input type="text" class="form-control" id="user-name" />
                    </div>
                    <div class="mb-3">
                      <label
                        for="user-loaction"
                        class="col-form-label fs-6 fw-semibold"
                      >
                        Location:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="user-loaction"
                      />
                    </div>
                    <div class="mb-3">
                      <label
                        for="user-dob"
                        class="col-form-label fs-6 fw-semibold"
                      >
                        Date of Birth:
                      </label>
                      <input type="date" class="form-control" id="user-dob" />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 d-flex flex-column mt-4">
        <p className="fs-5 fw-bold">Trupti Yadav</p>
        <p className="text-muted fw-bold">@trupti_04</p>
        <p>
          <span className="me-5">
            <i className="fa-solid fa-cake-candles"></i> Date of Birth: 4th June
          </span>
          <span className="ms-5 ms-md-0">
            <i className="fa-solid fa-location-dot"></i> Mumbai
          </span>
        </p>
        <p>
          <span>
            <i className="fa-regular fa-calendar"></i> Joined on: 8th May 2023
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
