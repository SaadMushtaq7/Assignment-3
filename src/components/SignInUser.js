import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ChangePassword from "./dashboards/ChangePassword";
import "../styles/signin.css";

export default function SignInUser() {
  const users = useSelector((state) => state.users);
  const [name, setName] = useState("");
  const [pincode, setPincode] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(-1);
  const [password, setPassword] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loginCounter, setLoginCounter] = useState(0);

  const authUserLogin = async () => {
    let index = -1;
    if (loginCounter === 0) {
      index = users.findIndex((e) => e.name === name);
      setLoginCounter(1);
    }
    console.log(index);
    if (index >= 0) {
      setPassword(true);
      setCurrentUser(users[index]);
      if (users[index].pincode === pincode) {
        setLoginSuccess(1);
      } else if (users[index].pincode === pincode && users[index].firstTime) {
        setPassword(true);
        setLoginSuccess(2);
      } else {
        setLoginSuccess(0);
      }
    } else {
      setLoginSuccess(0);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign In as User</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Pincode"
                  onChange={(e) => {
                    setPincode(e.target.value);
                  }}
                />
              </div>

              {loginSuccess === 0 ? (
                <div className="loginFailed">
                  <p>
                    Login Failed! <i className="fa-solid fa-circle-info"></i>
                  </p>
                </div>
              ) : (
                " "
              )}
              {loginSuccess === 1 ? (
                <Link to="/userDashboard" state={currentUser}>
                  <input
                    type="submit"
                    className="btn solid"
                    value="Login"
                    onClick={authUserLogin}
                  />
                </Link>
              ) : (
                <Link to="/">
                  <input
                    type="submit"
                    className="btn solid"
                    value="Login"
                    onClick={authUserLogin}
                  />
                </Link>
              )}
              <p className="social-text">Or Sign in using social platforms</p>
              <div className="social-media">
                <a href="/#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="/#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <p className="gotoSignUp">
                Or Are you an admin?{" "}
                <Link to="/signInAdmin" className="linkToSignUp">
                  SignIn as admin instead?
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      {currentUser.firstTime && password && (
        <ChangePassword
          setPassword={setPassword}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          setPincode={setPincode}
        />
      )}
    </div>
  );
}
