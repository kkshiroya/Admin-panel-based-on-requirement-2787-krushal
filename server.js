require("dotenv").config();
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const { ConnectDB } = require("./db/dbConnect");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

const options = {
  origin: "*",
};
app.use(cors(options)); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());

app.set("view engine", "ejs");


app.get("//", (req, res) => {
  res.render("./login.ejs");
});

app.get("///", (req, res) => {
  res.render("./register.ejs");
});


app.use("/v1", routes);

ConnectDB();

http.createServer(app).listen(process.env.PORT, () => {
  console.log("server started scuucess");
});
