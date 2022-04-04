import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../styles/admin-overall-stats.css";

export default function OverallStats() {
  const items = useSelector((state) => state.users);
  const [users, setUsers] = useState(items);

  const [firstIndex, setFirstIndex] = useState(users[0].id);
  const [searchData, setSearchData] = useState("");
  useEffect(() => {
    setUsers(users);
  }, [firstIndex]);

  function handleSortUp() {
    users.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setFirstIndex(users[0].id);
  }
  function handleSortDown() {
    users.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });
    setFirstIndex(users[0].id);
  }

  function handleSortHrsUp() {
    users.sort((a, b) => {
      if (a.workingHours < b.workingHours) {
        return -1;
      }
      if (a.workingHours > b.workingHours) {
        return 1;
      }
      return 0;
    });
    setFirstIndex(users[0].id);
  }
  function handleSortHrsDown() {
    users.sort((a, b) => {
      if (a.workingHours > b.workingHours) {
        return -1;
      }
      if (a.workingHours < b.workingHours) {
        return 1;
      }
      return 0;
    });
    setFirstIndex(users[0].id);
  }

  return (
    <div>
      <div className="stat-modal-container">
        <div className="title">
          <h2>Overall Stats</h2>
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
          <div className="sorting">
            <div className="sort-name">
              <p>Name</p>
              <button onClick={handleSortUp}>
                <i className="fa-solid fa-sort-up"></i>
              </button>
              <button onClick={handleSortDown}>
                <i className="fa-solid fa-sort-down"></i>
              </button>
            </div>
            <div className="sort-time">
              <p>Working Hrs</p>
              <button onClick={handleSortHrsUp}>
                <i className="fa-solid fa-sort-up"></i>
              </button>
              <button onClick={handleSortHrsDown}>
                <i className="fa-solid fa-sort-down"></i>
              </button>
            </div>
          </div>
          <table className="recordsTable">
            <thead>
              <tr className="header">
                <th>Name</th>
                <th>Total Hrs.</th>
                <th>Daily Average Hrs.</th>
              </tr>
            </thead>
            <tbody>
              {users
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
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.workingHours}</td>
                      <td>{(item.workingHours / 20).toFixed(2)}</td>
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
