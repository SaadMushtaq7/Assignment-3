import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/state/index";
import { useSelector } from "react-redux";
import RemoveModal from "./RemoveModal";
import EditUser from "./EditUser";
import "../../styles/admin-setting.css";

export default function Setting() {
  const [searchData, setSearchData] = useState("");
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [userClicked, setUserClicked] = useState({});

  const users = useSelector((state) => state.users);
  const workingTime = useSelector((state) => state.workingTime);
  const dispatch = useDispatch();
  const { addUser, editTime } = bindActionCreators(actionCreators, dispatch);

  const [startTimer, setStartTimer] = useState(workingTime.startTime);
  const [finishTimer, setFinishTimer] = useState(workingTime.finishTime);
  const [workingHrs, setWorkingHrs] = useState(workingTime.workHrs);

  function submitAddUser() {
    const user = {
      id: users.length + 1,
      name: fName + lName,
      email: email,
      firstTime: true,
      isAdmin: false,
      pincode: "0000",
      position: position,
      status: "Absent",
      attendance: false,
      onLeave: false,
      workingHours: 0,
      history: [],
    };
    addUser(user);
  }
  function submitChangeTime() {
    console.log(workingTime);
    const updatedTime = {
      startTime: startTimer,
      finishTime: finishTimer,
      workHrs: workingHrs,
    };
    editTime(updatedTime);
    console.log(workingTime);
  }

  return (
    <div className="admin-setting-container">
      <div className="title">
        <h2>Setting</h2>
        <div className="search-icon">
          <input
            type="text"
            id="myInput"
            className="input-field"
            onChange={(event) => {
              setSearchData(event.target.value);
            }}
            placeholder="Search Here..."
            title="Type here"
          />
        </div>
      </div>
      <div className="body">
        <div className="table-div">
          <table className="recordsTable">
            <thead>
              <tr className="header">
                <th>Name</th>
                <th>Position</th>
                <th>Email</th>
                <th>Total Hrs.</th>
                <th>Daily Average Hrs.</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users
                .filter((search) => {
                  if (searchData === "") {
                    return search;
                  }
                  if (
                    search.name.toLowerCase().includes(searchData.toLowerCase())
                  ) {
                    return search;
                  } else {
                    return null;
                  }
                })
                .map((item) => {
                  return [
                    item.id && (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.position}</td>
                        <td>{item.email}</td>
                        <td>{item.workingHours}</td>
                        <td>{(item.workingHours / 20).toFixed(2)}</td>
                        <td>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setRemove(true);
                              setUserClicked(item);
                            }}
                            className="btn delete"
                          >
                            Delete
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setEdit(true);
                              setUserClicked(item);
                            }}
                            className="btn"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ),
                  ];
                })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="add-employee">
        <h3>Add Employee</h3>
        <div className="add-employee-form">
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => {
              setFName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => {
              setLName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Position"
            onChange={(e) => {
              setPosition(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button type="button" className="btn" onClick={submitAddUser}>
          Add
        </button>
      </div>
      <div className="change-time">
        <h3>Change Office Hours</h3>
        <div className="change-office-hours">
          <div className="office-hours">
            <p>Start Time</p>
            <input
              type="text"
              placeholder="Office Hours Start"
              value={startTimer}
              onChange={(e) => {
                setStartTimer(e.target.value);
              }}
            />
            <p>Finish Time</p>
            <input
              type="text"
              placeholder="Office Hours Finish"
              value={finishTimer}
              onChange={(e) => {
                setFinishTimer(e.target.value);
              }}
            />
          </div>
          <div className="working-hours">
            <p>Work Hrs</p>
            <input
              type="text"
              placeholder="Minimum working Hours"
              value={workingHrs}
              onChange={(e) => {
                setWorkingHrs(e.target.value);
              }}
            />
          </div>
        </div>
        <button type="button" className="btn" onClick={submitChangeTime}>
          Change
        </button>
      </div>
      {edit && <EditUser setEdit={setEdit} userToEdit={userClicked} />}
      {remove && (
        <RemoveModal
          setRemove={setRemove}
          userToDelete={userClicked}
          noOfUsers={users.length}
        />
      )}
    </div>
  );
}
