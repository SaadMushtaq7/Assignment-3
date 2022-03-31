import React from "react";
import { useLocation } from "react-router";
import "../../styles/admin-dashboard.css";
import { Link } from "react-router-dom";

export default function Admin() {
  const location = useLocation();
  const currentUser = location.state;
  console.log(currentUser);
  return (
    <div className="admin-container">
      <div className="admin-setting">
        <Link to="/adminDashboard/settings">
          <button>
            <i className="fa-solid fa-gear"></i>
          </button>
        </Link>
      </div>
      <div className="img-container">
        <img
          src="https://toppng.com/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png"
          alt="admin-avatar"
        />
      </div>
      <div>
        <h3 className="admin-name">Hi! {currentUser.name}</h3>
      </div>
      <div className="widget-btn">
        <Link to="/adminDashboard/availability">
          <button id="myBtn" className="btn solid">
            {" "}
            Today's Availability
          </button>
        </Link>
        <Link to="/adminDashboard/stats">
          <button className="btn solid"> Overall Stats</button>
        </Link>
      </div>
    </div>
  );
}
