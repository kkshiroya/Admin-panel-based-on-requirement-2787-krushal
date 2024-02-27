const express = require("express");
const route = express.Router();
const adminRoute = require("./admin.route");
const catagaryRoute = require("./catagary.route");
const itemRoute = require("./item.route");
const menuRoute = require("./menu.route");
const OrderRoute = require("./Order.route");
const userRoute = require("./user.route");

route.use("/admin", adminRoute);
route.use("/catagary", catagaryRoute);
route.use("/item", itemRoute);
route.use("/menu", menuRoute);
route.use("/Order", OrderRoute);
route.use("/user", userRoute);
module.exports = route;
