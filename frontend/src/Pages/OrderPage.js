import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../actions/orderActions';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export const OrderPage = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = orderState;

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  return (
    <div>
      <h1 className="fw-bolder" style={{ fontSize: '35px' }}>
        My Orders
      </h1>
      <div className="row justify-content-center">
        {loading && <Loading />}
        {error && <Error error="Something went wrong!!" />}
        {orders &&
          orders.map((order) => (
            <div className="col-md-8 mb-4" key={order._id} style={{backgroundColor:"lightskyblue"}}>
              <div className="flex-container">
                <div className="text-start w-50">
                  <h2 className="fw-bold" style={{ fontSize: '25px' }}>
                    Items
                  </h2>
                  {order.orderItems.map((item, index) => (
                    <div key={index}>
                      <p>
                        {item.name} [{item.varient}] &times; {item.quantity} ={' '}
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="text-start w-25">
                  <h2 className="fw-bold" style={{ fontSize: '25px' }}>
                    Address
                  </h2>
                  <p>Street: {order.shippingAddress.street}</p>
                  <p>City: {order.shippingAddress.city}</p>
                  <p>Country: {order.shippingAddress.country}</p>
                  <p>Pincode: {order.shippingAddress.pincode}</p>
                </div>
                <div className="text-start w-25">
                  <h2 className="fw-bold" style={{ fontSize: '25px' }}>
                    Order Information
                  </h2>
                  <p>Order Amount: {order.orderAmount}</p>
                  <p>Date: {order.createdAt.substring(0, 10)}</p>
                  <p>Transaction ID: {order.transactionId}</p>
                  <p>Order ID: {order._id}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
