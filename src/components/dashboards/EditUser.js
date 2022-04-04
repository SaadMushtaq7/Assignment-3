import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/state/index";
import "../../styles/admin-edit-modal.css";

export default function EditUser({ setEdit, userToEdit }) {
  const [first, last] = userToEdit.name.split(/[A-Z][a-z]+/g);
  const [updatedUser, setUpdatedUser] = useState({});
  const [fName, setFName] = useState(first);
  const [lName, setLName] = useState(last);
  const [position, setPosition] = useState(userToEdit.position);
  const [email, setEmail] = useState(userToEdit.email);

  const dispatch = useDispatch();
  const { editUser } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    editUser(updatedUser);
  }, [updatedUser]);
  return (
    <div className="modalBackground">
      <div className="modalEditContainer">
        <div className="titleCloseBtn">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setEdit(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Edit Info.</h1>
        </div>
        <div className="body">
          <input
            type="text"
            placeholder="First Name"
            value={fName}
            onChange={(e) => {
              e.stopPropagation();
              setFName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lName}
            onChange={(e) => {
              e.stopPropagation();
              setLName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => {
              e.stopPropagation();
              setPosition(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              e.stopPropagation();
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="footer">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setEdit(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setUpdatedUser({
                ...userToEdit,
                name: fName + " " + lName,
                position: position,
                email: email,
              });
              editUser(updatedUser);
              setTimeout(() => {
                setEdit(false);
              }, 200);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
