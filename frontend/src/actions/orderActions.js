import axios from "axios";

export const orderActions = (token, subtotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const cartItems = getState().cartReducer.cartItems;

  try {
    const response = await axios.post(
      "http://localhost:8000/api/orders/placeorder", // Replace with the actual URL
      {
        token,
        subtotal,
        currentUser,
        cartItems,
      },
      {
        headers: {
          "Content-Type": "application/json", // Set the content type header
          // You may include other headers if required, such as authorization headers
        },
      }
    );

    // Handle the successful response here
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
  } catch (error) {
    // Handle the error here
    dispatch({ type: "PLACE_ORDER_FAILED" });
  }
};

export const getUserOrders = () => async (dispatch) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  dispatch({ type: "GET_USER_ORDERS_REQUEST" });
  try {
    const response = await axios.post("/api/orders/getuserorders", {
      userId: currentUser._id,
    });
    dispatch({ type: "GET_USER_ORDERS_SUCCESS", payload: response.data })
  } catch (error) {
    dispatch({ type: "GET_USER_ORDERS_FAILED", payload: error });
  }
};


