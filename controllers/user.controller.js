const { verifyToken, createToken } = require("../middlewares/auth");
const { userService } = require("../services");
const { findUser } = require("../services/user.service");

const getUser = async (req, res) => {
  const token = req.cookies["login_token"];

  if (!token) {
    res.status(500).json({
      message: "not login",
    });
  }

  const user = await userService.getUser();
  console.log(user, "get user");

  res.status(200).json({
    message: "profile get success",
    data: user,
  });
};


const getProfile = async (req, res) => {
  const token = req.cookies["login_token"];

  if (!token) {
    res.status(400).json({
      mesasge: "not login",
    });
  }

  const user = await verifyToken(token);

  console.log(user);

  res.status(200).json({ message: "admin get success", user });
};


const addUser = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const user = await userService.addUser(body);
    if (!user) {
      throw new Error("something wrong");
    }
    res.status(201).json({
      message: "user Created success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
const loginUser = async (req, res) => {
  const body = req.body;
  const email = req.body.email;
  const password = req.body.password;

  console.log(body);

  const findUser = await userService.findUser(email);

  console.log(findUser);

  if (!findUser) {
    res.status(500).json({
      message: "user not found",
    });
  } else {
    if (password === findUser.password) {
      let data = {
        _id: findUser._id,
        email: findUser.email,
        contactNumber: findUser.contactNumber,
        role: findUser.role,
      };

      const token = createToken(data);

      res.cookie("login_token", token);

      res.status(200).json({
        message: "login success",
      });
    } else {
      res.status(500).json({
        message: "valid password",
      });
    }
  }
};


module.exports = { getUser, getProfile, addUser, loginUser };
