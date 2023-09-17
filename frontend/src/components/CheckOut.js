import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { orderActions } from "../actions/orderActions";
import { orderReducer } from "../Reducers/orderReducer";
import { Loading } from "./Loading";
import { Success } from "./Success";
import { Error } from "./Error";

export const CheckOut = ({subtotal}) => {
  const orderState = useSelector((state)=>state.orderReducer)
  const {loading,error,success} = orderState;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(orderActions(token, subtotal));
  };
  return (
    <div>
      {loading && (<Loading />)}
      {error && (<Error error="Something went wrong"/>)}
      {success && (<Success success=" Your Order Placed Successfully"/>)}




      <StripeCheckout
       amount={subtotal * 100}
       shippingAddress
       currency="INR"
        token={tokenHandler}
        stripeKey="pk_test_51NqFvPSE2sezpANaFxbZgfgNbVYA4866X1q6vtW56JRVHRO55VOiWpohifI1Gu821EAcMBD3FEy7WrIseVjYQ7Nb00tqTnhvQo"
      >
        <button className="btn">CHECK OUT</button>
      </StripeCheckout>
    </div>
  );
};
