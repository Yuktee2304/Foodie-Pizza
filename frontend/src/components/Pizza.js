import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import cartActions from "../actions/cartActions";

const Pizza = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("Small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions(pizza, quantity, varient));
  };
  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <div onClick={handleShow}>
        <h1 className="heading">{pizza.name}</h1>
        <img src={pizza.image} className="Img-fluid" />
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => setVarient(e.target.value)}
          >
            {pizza.varients.map((varient) => {
              return <option key={varient} value={varient}>{varient}</option>;
            })}
          </select>
        </div>

        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p className="fw-bolder mt-1">
            Price: {pizza.prices[0][varient] * quantity} Rs/-
          </p>
        </div>

        <div className="w-100 m-1">
          <button className="btn" type="button" onClick={addToCart}>
            Add To Cart
          </button>
        </div>
      </div>

      {/* //Getting modal from react-bootsrap */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image} className="img-modal" />
          <p className="mt-2">{pizza.description}</p>
          <i className="bi bi-heart"></i>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Pizza;
