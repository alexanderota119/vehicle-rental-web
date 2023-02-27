import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useApi from "../helpers/useApi";
import "./register.css";

const Register = () => {
  const api = useApi();
  const navigate = useNavigate();
  const [User, setUser] = useState({
    full_name: "",
    email: "",
    password: "",
    gender: "",
    phone_number: "",
    address: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const onChangeInput = (event) => {
    event.preventDefault();
    const data = { ...User };
    data[event.target.name] = event.target.value;
    setUser(data);
  };

  const register = () => {
    api
      .requests({
        method: "POST",
        url: "/auth/register",
        data: User,
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        const errorMessage = err.response.data.description;
        setErrorMessage(errorMessage);
      });
  };

  return (
    <div className="register-container">
      <div className="register-hero">
        <div className="register-container1">
          <h1 className="register-text">Lets Explore The World</h1>
          <span className="register-text1">
            <span>
              Already have account.
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <Link to="/login" className="register-navlink">
              Login here
            </Link>
            <span>.</span>
          </span>
          <input
            type="text"
            required
            placeholder="Full Name"
            className="register-textinput input"
            onChange={onChangeInput}
            name="full_name"
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="register-textinput1 input"
            onChange={onChangeInput}
            name="email"
          />
          <input
            type="password"
            required
            placeholder="Password"
            className="register-textinput2 input"
            onChange={onChangeInput}
            name="password"
          />
          <select
            required
            className="register-select input"
            onChange={onChangeInput}
            name="gender"
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="number"
            required
            placeholder="Phone Number"
            className="register-textinput3 input"
            onChange={onChangeInput}
            name="phone_number"
          />
          <textarea
            required
            placeholder="Address"
            className="register-textarea input"
            onChange={onChangeInput}
            name="address"
          ></textarea>
          <button className="register-button button" onClick={register}>
            Sign Up
          </button>

          <span>
            {errorMessage && (
              <div className="login-button button">{errorMessage}</div>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
