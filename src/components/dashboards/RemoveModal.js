import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/state/index";
import "../../styles/admin-remove-modal.css";

export default function RemoveModal({ setRemove, userToDelete, noOfUsers }) {
  const dispatch = useDispatch();
  const { deleteUser } = bindActionCreators(actionCreators, dispatch);
  return (
    <div className="modal-background">
      <div className="remove-modal-container">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setRemove(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>Delete this file?</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setRemove(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log(userToDelete);
              deleteUser(userToDelete);
              setTimeout(() => {
                setRemove(false);
              }, 100);
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
