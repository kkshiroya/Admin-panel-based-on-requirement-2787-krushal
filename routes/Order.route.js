const express = require("express");
const validate = require("../middlewares/validate");
const { OrderController } = require("../controllers");
const OrderValidation  = require("../validation/order.validate");
const route = express.Router();

route.get("/get", OrderController.getorder);
route.post("/add", validate(OrderValidation.addOrder), OrderController.addorder);
route.put(
  "/update/:id",
  validate(OrderValidation.addOrder),
  OrderController.updateorder
);
route.delete(
  "/delete/:id",
  validate(OrderValidation.addOrder),  
  OrderController.addorder
);

module.exports = route;
