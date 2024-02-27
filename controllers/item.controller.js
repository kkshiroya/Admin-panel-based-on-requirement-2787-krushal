const { itemService } = require("../services");

// GET item

const getitem = async (req, res) => {
  const item = await itemService.getitem();
  console.log(item, "item get");

  res.status(200).json({
    message: "item get success",
    data: item,
  });
};

const additem = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const item = await itemService.additem(body);

    if (!item) {
      throw new Error("something went wrong");
    }
    res.status(201).json({
      message: "item Created success",
      data: item,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const updateitem = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log(id, body);
    const item = await itemService.updateitem(id, body);

    res.status(200).json({
      message: "item updated success",
      data: item,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
const deleteitem = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const item = await itemService.deleteitem(id);
    if (!item) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "item delete success",
      data: item,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = {
    getitem,additem,updateitem,deleteitem,
};
