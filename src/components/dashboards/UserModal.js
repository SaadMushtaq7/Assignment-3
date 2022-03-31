import React, { useState } from "react";
import "../../styles/user-modal.css";

export default function UserModal({ setShowRecord, name, history }) {
  const [searchDate, setSearchDate] = useState("");
  return (
    <div className="user-modal-background">
      <div className="user-modal-container">
        <div className="title">
          <span className="close" onClick={() => setShowRecord(false)}>
            &times;
          </span>
          <h2>Attendance Record</h2>

          <div className="search-icon">
            <i className="fa-solid fa-magnifying-glass icon"></i>
            <input
              type="text"
              id="myInput"
              className="input-field"
              value={searchDate}
              onChange={(event) => {
                setSearchDate(event.target.value);
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
              placeholder="Search by Date.."
              title="Type in a date"
            />
          </div>
        </div>
        <div className="body">
          <h4>Name: {name}</h4>
          <table className="recordsTable">
            <thead>
              <tr className="header">
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {history
                .filter((search) => {
                  if (searchDate === "") {
                    return search;
                  } else if (
                    search.date.toLowerCase().includes(searchDate.toLowerCase())
                  ) {
                    return search;
                  } else {
                    return null;
                  }
                })
                .map((item) => {
                  return [
                    <tr key={item.date}>
                      <td>{item.date}</td>
                      <td>{item.status}</td>
                    </tr>,
                  ];
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
