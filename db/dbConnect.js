const mongoose = require("mongoose");

const ConnectDB = () => {
  mongoose
    .connect(process.env.URI)
    .then(() => {
      console.log("DB connected scuucess");
    })
    .catch((err) => {
      console.log(err, "err");
    });
};

module.exports = { ConnectDB };
