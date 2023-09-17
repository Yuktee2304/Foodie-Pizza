import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartReducer } from "../Reducers/cartReducer";
import { loginUserReducer } from "../Reducers/userReducers";
import { logoutUser } from "../actions/userActions";

const Navbar = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const data = JSON.parse(localStorage.getItem("currentUser"));

  const dispatch = useDispatch();

  // Define a function to handle logout
  const handleLogout = () => {
    // Dispatch the logout action here
    dispatch(logoutUser());
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
        <a className="navbar-brand" href="/">
          Foodie Pizza
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {data?(
                  <div className="dropdown">
                  <a style={{color:"black"}} className="dropdown-toggle nav-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {data.name}
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/orders">Orders</a>
                    <a className="dropdown-item" href="/login">Logout</a>
                  </div>
                </div>
            )
               : 
             (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <i className="bi bi-cart"></i>
                Cart ({cartState.cartItems.length})
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
