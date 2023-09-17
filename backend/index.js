const express = require("express");
const db = require("./db");
const Pizza = require("./models/pizzaModel");
const pizzaRoute = require("./routes/pizzaRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoutes")
const app = express();
const cors = require('cors');


app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with the actual frontend URL
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Server is working" + port);
});

app.use("/api/pizzas/", pizzaRoute);
app.use("/api/users/",userRoute)
app.use("/api/orders",ordersRoute)

app.get("/getPizzas", async (req, res) => {
  try {
    const pizzas = await Pizza.find({});
    res.send(pizzas);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

const port = process.env.PORT || 8000;

app.listen(port, () => "Server is running on port");
