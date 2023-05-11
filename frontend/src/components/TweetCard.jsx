import React from "react";

export const TweetCard = () => {
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <div className="card w-75">
          <div className="row">
            <div className="col-2 d-flex justify-content-center">
              <div className="mt-4 ms-5 ms-md-1">
                <img
                  src="https://avatars.githubusercontent.com/u/92917582?s=40&v=4"
                  alt="hugenerd"
                  width="50"
                  height="50"
                  className="rounded-circle"
                />
              </div>
            </div>
            <div className="col-10">
              <div className="card-body">
                <p>
                  <i className="fa-solid fa-retweet pe-2" role="button"></i>
                  <span>
                    Retweeted by{" "}
                    <span className="fw-semibold">@johndoe_13</span>
                  </span>
                </p>
                <p className="card-title fw-bolder fs-5">
                  Trupti Yadav{" "}
                  <span className="ms-1 text-muted me-5 me-md-0">
                    @trupti_04
                  </span>
                  <span className="ms-4 text-muted fs-6 me-md-5 pe-md-5">
                    7th May 2023
                  </span>
                  <i
                    className="fa-solid fa-trash fs-5 text-danger ms-md-5 ps-md-5"
                    role="button"
                  ></i>
                </p>

                <p className="card-text">
                  Here is your reminder that koalas have similar fingerprints to
                  humans, and have caused confusion in crime scenes before. 😳🐨
                  <br /> - Photographed by Andrew Merry
                </p>
                <img
                  src="https://pbs.twimg.com/media/FtdoBSuXgAEzb0-?format=jpg&name=small"
                  alt=""
                  className="img-fluid"
                  height="250"
                  width="250"
                />
                <div className="d-flex justify-content-start gap-1 gap-md-5 mt-2 fs-5">
                  <div className="like">
                    <i className="fa-regular fa-heart pe-2" role="button"></i>
                    <span>3</span>
                  </div>
                  <div className="comment">
                    <i className="fa-regular fa-comment pe-2" role="button"></i>
                    <span>5</span>
                  </div>
                  <div className="retweet">
                    <i className="fa-solid fa-retweet pe-2" role="button"></i>
                    <span>1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
