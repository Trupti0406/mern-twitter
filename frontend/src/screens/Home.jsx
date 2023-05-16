import React from "react";
import { Sidebar } from "../components/Sidebar";
import { TweetCard } from "../components/TweetCard";

export const Home = () => {
  return (
    <div className="container-fluid overflow-hidden">
      <div className="vh-100 row overflow-auto">
        <Sidebar />
        <div className="col d-flex flex-column h-sm-100">
          <nav className="top-0 navbar d-flex justify-content-between">
            <span className="navbar-brand mb-0 h1 fw-bolder fs-3">Explore</span>
            <button
              className="btn btn-primary mb-0 h1 fw-bold px-5 py-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Tweet
            </button>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-4" id="staticBackdropLabel">
                      New Tweet
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <textarea name="tweet" id="" cols="42" rows="5"></textarea>
                    <p className="fw-semibold">
                      Uplaod an image for your tweet:
                    </p>
                    <input type="file" name="" id="" />

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
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Tweet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="row">
            <TweetCard />
            <TweetCard />
            <TweetCard />
            <TweetCard />
            <TweetCard />
            <TweetCard />
          </div>
        </div>
      </div>
    </div>
  );
};
