import React from "react";
import { Sidebar } from "../components/Sidebar";
import { TweetList } from "../components/TweetList";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { BASE_URL } from "../config";
// import Alerter from "sweetalert2";

export const Home = () => {
  return (
    <div>
      <div class="container-fluid overflow-hidden">
        <div class="row vh-100 overflow-auto">
          <Sidebar />
          <TweetList />
        </div>
      </div>
    </div>
  );
};
