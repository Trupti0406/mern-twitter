import React from "react";
import { Sidebar } from "../components/Sidebar";
import { TweetCard } from "../components/TweetCard";

export const Home = () => {
  return (
    <div>
      <div className="container-fluid overflow-hidden">
        <div className="vh-100 row overflow-auto">
          <Sidebar />
          <div className="col d-flex flex-column h-sm-100">
            <nav className="top-0 navbar d-flex justify-content-between">
              <span className="navbar-brand mb-0 h1 fw-bolder fs-3">
                Explore
              </span>
              <button
                className="btn btn-primary mb-0 h1 fw-bold px-5 py-2"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Tweet
              </button>
              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-4" id="staticBackdropLabel">
                        New Tweet
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <textarea
                        name="tweet"
                        id=""
                        cols="42"
                        rows="5"
                      ></textarea>
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
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
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
    </div>
  );
};
