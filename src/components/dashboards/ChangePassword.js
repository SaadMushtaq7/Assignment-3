import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/state/index";
import "../../styles/change-password.css";

export default function ChangePassword({
  setPassword,
  currentUser,
  setCurrentUser,
  setPincode,
}) {
  //useEffect(() => {
  //  changePassword(currentUser);
  //}, [currentUser]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const dispatch = useDispatch();
  const { changePassword } = bindActionCreators(actionCreators, dispatch);
  function handleOnClick(e) {
    e.stopPropagation();
    if (
      newPassword !== "" &&
      newPassword === confirmNewPassword &&
      newPassword.length === 4
    ) {
      const updateUser = {
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email,
        firstTime: false,
        isAdmin: currentUser.isAdmin,
        pincode: newPassword,
        position: currentUser.position,
        status: currentUser.status,
        attendance: currentUser.attendance,
        onLeave: currentUser.onLeave,
        workingHours: currentUser.workingHours,
        history: currentUser.history,
      };
      setPincode(newPassword);
      console.log(newPassword);
      console.log(updateUser.pincode);
      setCurrentUser(updateUser);
      changePassword(updateUser);
    }
    setTimeout(() => {
      setPassword(false);
    }, 5000);
  }

  return (
    <div className="password-modalBackground">
      <div className="password-modalEditContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setPassword(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Change Password</h1>
        </div>
        <div className="body">
          <input
            type="password"
            placeholder="Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </div>
        <div className="footer">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setPassword(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={(e) => handleOnClick(e)}>Save</button>
        </div>
      </div>
    </div>
  );
}
