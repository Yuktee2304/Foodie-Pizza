import { React, useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import { loginUserReducer } from "../Reducers/userReducers";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { Success } from "../components/Success";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {loading,error, success} = useSelector(state=>state.loginUserReducer)

  const dispatch = useDispatch();

  useEffect(() => {
    // fetchData();
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);
  const login = () => {
    const userLogin = {
      email,
      password,
    };
    dispatch(loginUser(userLogin));
  };
  return (
    <div>
      <div className="row justify-content-center m-5 login-page">
        <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded">
          <h2
            className="text-center fw-bolder mt-2"
            style={{ fontSize: "35px" }}
          >
            Login
          </h2><span><i className="fa-solid fa-share-from-square"></i></span>

          {loading && (<Loading/>)}
          {success && (<Success success='User logged In Successfully'/>)}
          {error && (<Error error='Invalid credentials' />)}

          <div>
            <input
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <input
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="btn mt-3 mb-3" onClick={login} href="/">
              LOGIN
            </button>
            <a className="m-3 fw-bold link-offset-2 link-underline link-underline-opacity-0 text-primary change-color-on-click" href="/register" style={{color:'black'}}>Click Here To Register</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
