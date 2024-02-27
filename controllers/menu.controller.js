const { menuService } = require("../services");

// GET menu

const getMenu = async (req, res) => {
  const menu = await menuService.getMenu();
  console.log(menu, "menu get");

  res.status(200).json({
    message: "menu get success",
    data: menu,
  });
};

const addMenu = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const menu = await menuService.addMenu(body);

    if (!menu) {
      throw new Error("something went wrong");
    }
    res.status(201).json({
      message: "Menu Created success",
      data: menu,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const updateMenu = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log(id, body);
    const menu = await menuService.updateMenu(id, body);

    res.status(200).json({
      message: "menu updated success",
      data: menu,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
const deleteMenu = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const menu = await menuService.deleteMenu(id);
    if (!menu) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "menu delete success",
      data: menu,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = {
  getMenu,
  addMenu,
  updateMenu,
  deleteMenu,
};
