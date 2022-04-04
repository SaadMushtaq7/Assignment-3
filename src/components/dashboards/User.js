import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "../../styles/user-dashboard.css";
import UserModal from "./UserModal";

export default function User() {
  const location = useLocation();
  const currentUser = location.state;
  const [message, setMessage] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setMessage(false);
    }, 3000);
  });
  const done = "Login Successful!";

  const [showRecord, setShowRecord] = useState(false);
  const [applyLeave, setApplyLeave] = useState(currentUser.onLeave);
  const [attendanceVal, setAttendanceVal] = useState("Punch Attendance");
  const [leaveVal, setLeaveVal] = useState("Apply for Leave");
  function handleAttendance() {
    if (attendanceVal === "Punch Attendance") {
      setAttendanceVal("Punch Out Attendance");
    } else {
      setAttendanceVal("Punch Attendance");
    }
  }
  return (
    <div className="user-container">
      {message ? <h3 className="message">{done}</h3> : ""}
      <div className="img-container">
        <img
          src="https://toppng.com/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png"
          alt="user-avatar"
        />
      </div>
      <div>
        <h3 className="username">Hi! {currentUser.name}</h3>
      </div>
      <div className="attendance-btn">
        <button className="btn solid" onClick={handleAttendance}>
          {attendanceVal}
        </button>
        <button
          className="btn solid"
          disabled={applyLeave}
          onClick={() => {
            setLeaveVal("Applied for Leave");
            setApplyLeave(true);
          }}
        >
          {leaveVal}
        </button>
        <button
          id="myBtn"
          className="btn solid"
          onClick={(e) => {
            e.stopPropagation();
            setShowRecord(true);
          }}
        >
          Watch Previous Record
        </button>
      </div>
      {showRecord && (
        <UserModal
          name={currentUser.name}
          history={currentUser.history}
          setShowRecord={setShowRecord}
        />
      )}
    </div>
  );
}
