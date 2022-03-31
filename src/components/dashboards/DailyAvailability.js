import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../../styles/admin-daily-availability.css";

export default function DailyAvailability() {
  const [searchData, setSearchData] = useState("");
  const users = useSelector((state) => state.users);
  return (
    <div>
      {users.length === 0 ? (
        <></>
      ) : (
        <div className="available-modal-container">
          <div className="title">
            <h2>Today's Availability</h2>
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass icon"></i>
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
            <div>
              <h3>Present</h3>
              {users
                .filter((type) => type.status === "Present")
                .filter((search) => {
                  if (searchData === "") {
                    return search;
                  } else if (
                    search.name.toLowerCase().includes(searchData.toLowerCase())
                  ) {
                    return search;
                  } else {
                    return "";
                  }
                })
                .map((item) => {
                  return [
                    <ul key={item.id}>
                      <li>{item.name}</li>
                    </ul>,
                  ];
                })}
            </div>
            <div>
              <h3>On Leave</h3>
              {users
                .filter((type) => type.status === "Leave")
                .filter((search) => {
                  if (searchData === "") {
                    return search;
                  } else if (
                    search.name.toLowerCase().includes(searchData.toLowerCase())
                  ) {
                    return search;
                  } else {
                    return null;
                  }
                })
                .map((item) => {
                  return [
                    <ul key={item.id}>
                      <li>{item.name}</li>
                    </ul>,
                  ];
                })}
            </div>
            <div>
              <h3>Absent</h3>
              {users
                .filter((type) => type.status === "Absent")
                .filter((search) => {
                  if (searchData === "") {
                    return search;
                  } else if (
                    search.name.toLowerCase().includes(searchData.toLowerCase())
                  ) {
                    return search;
                  } else {
                    return null;
                  }
                })
                .map((item) => {
                  return [
                    <ul key={item.id}>
                      <li>{item.name}</li>
                    </ul>,
                  ];
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
