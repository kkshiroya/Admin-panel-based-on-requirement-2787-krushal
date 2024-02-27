const { adminService } = require("../services");

// GET admin

const getadmin = async (req, res) => {
  const admin = await adminService.getadmin();
  console.log(admin, "admin get");

  res.status(200).json({
    message: "admin get success",
    data: admin,
  });
};

const addadmin = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const admin = await adminService.addadmin(body);

    if (!admin) {
      throw new Error("something went wrong");
    }
    res.status(201).json({
      message: "admin Created success",
      data: admin,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const updateadmin = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log(id, body);
    const admin = await adminService.updateadmin(id, body);

    res.status(200).json({
      message: "admin updated success",
      data: admin,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
const deleteadmin = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const admin = await adminService.deleteadmin(id);
    if (!admin) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "admin delete success",
      data: admin,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = {
    getadmin,addadmin,updateadmin,deleteadmin,
};
