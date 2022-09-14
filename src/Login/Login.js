import classNames from "classnames/bind";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function Login() {
  const nagative = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    // Sign In by FireBase
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          nagative("/");
        }
      })
      .catch((error) => alert("Incorrect account or password! Try again or create a new account."));
  };

  
  const handleRegister = (e) => {
    e.preventDefault();

    // Register by FireBase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          alert("Successful account creation! You can Sign In now.")
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <div className={cx("wrapper")}>
      <Link to="/">
        <img
          className={cx("logo")}
          src="https://pngimg.com/uploads/amazon/amazon_PNG1.png"
          alt="logo"
        />
      </Link>

      <div className={cx("container")}>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />

          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <button onClick={handleSignIn} className={cx("login-btn")}>
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={handleRegister} className={cx("register-btn")}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
