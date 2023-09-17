import { React, useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {registerUser} from "../actions/userActions";
import { userReducers } from "../Reducers/userReducers";
import { Loading } from "../components/Loading";
import { Success } from "../components/Success";
import { Error } from "../components/Error";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const registerState = useSelector(state=>state.userReducers)
  const {error, loading, success} = registerState;
  const dispatch = useDispatch();
  const register = ()=>{
    if(password!=passwordConfirm){
        alert("Password doesn't match")
    }
    else{
        const user={
            name,
            email,
            password
        }
        dispatch(registerUser(user))
    }
  }

//   useEffect(()=>{
//     if(localStorage.getItem('currentUser'))
//     {
//         window.location.href="/"
//     }
// },[])
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded">

          {loading && (<Loading/>)}
          {success && (<Success success='User registered Successfully'/>)}
          {error && (<Error error='Email already registered' />)}
          <h2
            className="text-center fw-bolder mt-2"
            style={{ fontSize: "35px" }}
          >
            Register
          </h2>
          <div>
            <input
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <input
              type="password"
              placeholder="confirm password"
              className="form-control"
              value={passwordConfirm}
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
              }}
              required
            />
            <button className="btn mt-3 mb-3" onClick={register}>REGISTER  <i className="bi bi-person"></i></button>
            <a className="m-3 fw-bold link-offset-2 link-underline link-underline-opacity-0 text-primary change-color-on-click" href="/login" style={{color:'black'}}>Click Here To Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
