const express = require("express");
const validate = require("../middlewares/validate");
const { adminController } = require("../controllers");
const adminValidation  = require("../validation/admin.validation");
const route = express.Router();

route.get("/get", adminController.getadmin);
route.post("/add", validate(adminValidation.addadmin), adminController.addadmin);
route.put(
  "/update/:id",
  validate(adminValidation.addadmin),
  adminController.updateadmin
);
route.delete(
  "/delete/:id",
  validate(adminValidation.addadmin),  
  adminController.deleteadmin
);

module.exports = route;
