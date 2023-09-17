const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51NqFvPSE2sezpANaxoA9RJAtYkCnHDkbJsJNTuRsveCYVVJVW5VVpStn2xIBy16Mhs8cWtcJil6x9DT6BDtOITzd00l7maeL0R"
);
const { v4: uuidv4 } = require("uuid");
const Order = require("../models/orderModel");
router.post("/placeorder", async (req, res) => {
  const { cartItems, currentUser, subtotal, token } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.paymentIntents.create(
      {
        amount: Number(subtotal) * 100, // Convert to cents
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
        payment_method_types: ["card"],
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      const newOrder = new Order({
        name: currentUser.name,
        email: currentUser.email,
        userId: currentUser._id,
        orderItems: cartItems,
        orderAmount: subtotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pincode: token.card.address_zip,
        },
        transactionId: uuidv4(), //payment.source.id
      });
      newOrder.save();
      res.status(200).send("Order placed successfully!!");
      //res.status(200).send("Payment Done successfully!!");
    } else {
      res.status(400).send("Payment failed");
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

router.post("/getuserorders", async (req, res) => {
  const { userId } = req.body;
  try {
    const orders = await Order.find({ userId: userId }).sort({_id:-1});
    res.send(orders);
  } catch (error) {
    return res.send(400).json({ message: error });
  }
});

module.exports = router;
