const express = require("express");
const validate = require("../middlewares/validate");
const { itemController } = require("../controllers");
const itemValidation  = require("../validation/item.validation");
const route = express.Router();

route.get("/get", itemController.getitem);
route.post("/add", validate(itemValidation.additem), itemController.additem);
route.put(
  "/update/:id",
  validate(itemValidation.additem),
  itemController.updateitem
);
route.delete(
  "/delete/:id",
  validate(itemValidation.additem),  
  itemController.deleteitem
);

module.exports = route;
