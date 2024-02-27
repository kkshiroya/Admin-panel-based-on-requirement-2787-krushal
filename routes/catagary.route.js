const express = require("express");
const validate = require("../middlewares/validate");
const { catagaryController } = require("../controllers");
const catagaryValidation  = require("../validation/catagary.validation");
const route = express.Router();

route.get("/get", catagaryController.getcatagary);
route.post("/add", validate(catagaryValidation.addcatagary), catagaryController.addcatagary);
route.put(
  "/update/:id",
  validate(catagaryValidation.addcatagary),
  catagaryController.updatecatagary
);
route.delete(
  "/delete/:id",
  validate(catagaryValidation.addcatagary),  
  catagaryController.deletecatagary
);

module.exports = route;
