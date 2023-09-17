const mongoose = require("mongoose");

var mongoURL = "mongodb://127.0.0.1:27017/FoodiePizzaDeliveryApp";

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

var db = mongoose.connection;

db.on('connected', ()=>{
    console.log("MongoDb connected successfully");
})

db.on('error',()=>{
    console.log("MongoDb connection failed");
})

module.exports = mongoose;