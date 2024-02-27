const { orderService } = require("../services");

// GET order

const getorder = async (req, res) => {
  const order = await orderService.getorder();
  console.log(order, "order get");

  res.status(200).json({
    message: "order get success",
    data: order,
  });
};

const addorder = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const order = await orderService.addOrder(body);

    if (!order) {
      throw new Error("something went wrong");
    }
    res.status(201).json({
      message: "order Created success",
      data: order,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const updateorder = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log(id, body);
    const order = await orderService.updateorder(id, body);

    res.status(200).json({
      message: "order updated success",
      data: order,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
const deleteorder = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const order = await orderService.deleteorder(id);
    if (!order) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "order delete success",
      data: order,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = {
  getorder,
  addorder,
  updateorder,
  deleteorder,
};
