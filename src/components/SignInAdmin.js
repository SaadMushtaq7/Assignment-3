import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ChangePassword from "./dashboards/ChangePassword";
import "../styles/signin.css";

export default function SignInAdmin() {
  const [name, setName] = useState("");
  const [pincode, setPincode] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(-1);
  const [password, setPassword] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loginCounter, setLoginCounter] = useState(0);

  const users = useSelector((state) => state.users);
  function authUserLogin() {
    let index = -1;
    if (loginCounter === 0) {
      index = users.findIndex((e) => e.name === name);
      setLoginCounter(1);
    }
    console.log(index);
    console.log(pincode);

    if (index >= 0) {
      setPassword(true);
      setCurrentUser(users[index]);
      if (
        users[index].pincode === pincode &&
        users[index].isAdmin &&
        users[index].firstTime
      ) {
        console.log("first");
        setLoginSuccess(-1);
        setLoginCounter(0);
        return;
      } else if (users[index].pincode === pincode && users[index].isAdmin) {
        console.log("second");
        setLoginSuccess(1);
        setLoginCounter(0);
        return;
      } else {
        console.log("third");
        setLoginSuccess(0);
        setLoginCounter(0);
        return;
      }
    } else {
      setLoginSuccess(0);
      return;
    }
  }
  return (
    <div>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign In As Admin</h2>
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
                ""
              )}
              {loginSuccess === 1 ? (
                <Link to="/adminDashboard" state={currentUser}>
                  <input
                    type="submit"
                    className="btn solid"
                    value="Login"
                    onClick={authUserLogin}
                  />
                </Link>
              ) : (
                <Link to="/signInAdmin">
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
                Or are you a User?{" "}
                <Link to="/" className="linkToSignUp">
                  SignIn as user instead?
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
          setPincode={setPincode}
          setCurrentUser={setCurrentUser}
        />
      )}
    </div>
  );
}
