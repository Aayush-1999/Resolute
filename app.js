const express               = require("express"),
      app                   = express(),
      cors                  = require("cors"),
      bodyParser            = require("body-parser"),
      mongoose              = require("mongoose");

require("dotenv").config();

//ROUTES
const indexRoute = require("./routes/index"),
      bookingRoute = require("./routes/booking"),
      userRoute  = require("./routes/user");

mongoose.connect(process.env.DATABASEURL,{ useUnifiedTopology: true ,useNewUrlParser:true});
mongoose.set("useFindAndModify",false);
mongoose.set("useCreateIndex",true);

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/",indexRoute);
app.use("/book",bookingRoute);
app.use("/user",userRoute);

app.listen(process.env.PORT || 5000)
{
    console.log("Server has started");
}