import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunkMiddleware from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import { composeWithDevTools } from "redux-devtools-extension";
import pizzaReducers from "./Reducers/pizzaReducers";
import cartReducer from "./Reducers/cartReducer";
import { userReducers, loginUserReducer } from "./Reducers/userReducers";
import { orderReducer, getUserOrdersReducer } from "./Reducers/orderReducer";

const finalReducer = combineReducers({
  pizzaReducers: pizzaReducers,
  cartReducer: cartReducer,
  userReducers: userReducers,
  loginUserReducer: loginUserReducer,
  orderReducer:orderReducer,
  getUserOrdersReducer:getUserOrdersReducer
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')):null
//const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')):null
const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  // userReducers:{
  //   user:user
  // },
  loginUserReducer: {
    currentUser: currentUser,
  },
};

const composeEnhancers = composeWithDevTools({});

const store = configureStore({
  reducer: finalReducer, // Replace `yourRootReducer` with your actual root reducer function
  middleware: [thunkMiddleware],
  preloadedState: initialState,
});

// const store = createStore(finalReducer, initialState,composeEnhancers(applyMiddleware(thunk)))

export default store;
