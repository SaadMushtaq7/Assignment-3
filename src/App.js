import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Admin from "./components/dashboards/Admin";
import User from "./components/dashboards/User";
import SignInUser from "./components/SignInUser";
import SignInAdmin from "./components/SignInAdmin";
import DailyAvailability from "./components/dashboards/DailyAvailability";
import OverallStats from "./components/dashboards/OverallStats";
import Setting from "./components/dashboards/Setting";
import EditUser from "./components/dashboards/EditUser";
import { store } from "./components/redux/state/store";
import "./App.css";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Routes>
            <Route path="/" element={<SignInUser />} />
            <Route path="/signInAdmin" element={<SignInAdmin />} />
            <Route path="/userDashboard" element={<User />} />
            <Route path="/adminDashboard" element={<Admin />} />
            <Route
              path="/adminDashboard/availability"
              element={<DailyAvailability />}
            />
            <Route path="/adminDashboard/stats" element={<OverallStats />} />
            <Route path="/adminDashboard/settings" element={<Setting />} />
            <Route
              path="/adminDashboard/settings/edit"
              element={<EditUser />}
            />
          </Routes>
        </>
      </Router>
    </Provider>
  );
}
