const { catagaryService } = require("../services");


const getcatagary = async (req, res) => {
  const catagary = await catagaryService.getcatagary();
  console.log(catagary, "catagary get");

  res.status(200).json({
    message: "catagary get success",
    data: catagary,
  });
};

const addcatagary = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const catagary = await catagaryService.addcatagary(body);

    if (!catagary) {
      throw new Error("something went wrong");
    }
    res.status(201).json({
      message: "catagary Created success",
      data: catagary,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const updatecatagary = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log(id, body);
    const catagary = await catagaryService.updatecatagary(id, body);

    res.status(200).json({
      message: "catagary updated success",
      data: catagary,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
const deletecatagary = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const catagary = await catagaryService.deletecatagary(id);
    if (!catagary) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "catagary delete success",
      data: catagary,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = {
    getcatagary,addcatagary,updatecatagary,deletecatagary,
};
