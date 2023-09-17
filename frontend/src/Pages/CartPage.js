import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cartActions, { deleteFromCart } from "../actions/cartActions";
import { CheckOut } from "../components/CheckOut";

// import CartItem from "./CartItem"; // Assuming you have a separate CartItem component

const CartPage = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;

  var subtotal = cartItems.reduce((acc,item)=>{
    return acc+Number(item.price)
  },0)
  const dispatch = useDispatch();
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6 m-2">
          <h2 className=" text-center fw-bolder">Cart Details</h2>

          {cartItems.map((item,index) => (
            <div className="flex-container" key={item._id}>
              <div className="text-start m-1 w-100">
                <h5 className="fw-bold">
                  {item.name} [{item.varient}]
                </h5>
                <h5 className="fw-bold">
                  Price: {item.quantity} * {item.prices[0][item.varient]} = {item.price}
                </h5>
                <h5 className="qntyStyle">Quantity:</h5>
                <i className="fa-solid fa-plus" onClick={()=>{dispatch(cartActions(item, item.quantity+1, item.varient))}}></i>
                <b>{item.quantity}</b>
                <i className="fa-solid fa-minus"  onClick={()=>{dispatch(cartActions(item, item.quantity-1, item.varient))}}></i>
                <hr />
              </div>
              <div className=" m-3 w-100">
                <img src={item.image} style={{height:'80px', width:'80px'}}/>
              </div>
            <div className=" m-3 w-100 mt-5">
            <i className="fa-solid fa-trash" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
            </div>



            </div>
          ))}
        </div>
        <div className="col-md-4 text-end">
         <h2 className="fw-bold" style={{fontSize:'25px'}}>Total Amount: {subtotal} /-</h2>
        <CheckOut subtotal={subtotal}/>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
