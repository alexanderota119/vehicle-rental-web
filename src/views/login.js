import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useApi from "../helpers/useApi";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/reducer/user";

import "./login.css";

const Login = () => {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const api = useApi();
  const navigate = useNavigate();
  const [User, setUser] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const onChangeInput = (event) => {
    event.preventDefault();
    const data = { ...User };
    data[event.target.name] = event.target.value;
    setUser(data);
  };

  const doLogin = () => {
    api
      .requests({
        method: "POST",
        url: "/auth/login",
        data: User,
      })
      .then((res) => {
        const { data } = res.data;
        dispatch(login(data.Token));
      })
      .catch((err) => {
        const errorMessage = err.response.data.description;
        setErrorMessage(errorMessage);
      });
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Vehicle Rental Frontend</title>
        <meta property="og:title" content="Login - Vehicle Rental Frontend" />
      </Helmet>
      <div className="login-hero">
        <div className="login-container1">
          <h1 className="login-text">Lets Explore The World</h1>
          <input
            required
            type="email"
            placeholder="Email"
            className="login-textinput input"
            onChange={onChangeInput}
            name="email"
          />
          <input
            required
            type="password"
            placeholder="Password"
            className="login-textinput1 input"
            onChange={onChangeInput}
            name="password"
          />

          <span>Forgot password</span>

          <span>
            {errorMessage && (
              <div className="login-button button">{errorMessage}</div>
            )}
          </span>

          <button className="login-button button" onClick={doLogin}>
            Login
          </button>
          <span>
            <span>
              Dont have account.
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <Link to="/register" className="login-navlink">
              Register now
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
