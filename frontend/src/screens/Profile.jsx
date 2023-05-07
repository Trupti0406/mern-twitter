import React from "react";
import { Sidebar } from "../components/Sidebar";
import { ProfilePage } from "./PofilePage";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { BASE_URL } from "../config";
// import Alerter from "sweetalert2";

export const Profile = () => {
  return (
    <div>
      <div class="container-fluid overflow-hidden">
        <div class="row vh-100 overflow-auto">
          <Sidebar />
          <ProfilePage />
        </div>
      </div>
    </div>
  );
};
