const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://Yuktee123:Yuktee123@cluster0.8nbllac.mongodb.net/FoodiePizzaDeliveryApp?retryWrites=true&w=majority";

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

var db = mongoose.connection;

db.on('connected', ()=>{
    console.log("MongoDb connected successfully");
})

db.on('error',()=>{
    console.log("MongoDb connection failed");
})

module.exports = mongoose;