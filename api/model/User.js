const monoose = require("mongoose");

const dataModel = monoose.Schema({
  name: {
    type: String,

    max: 50,
  },
  email: {
    type: String,

    max: 225,
  },
  gender: {
    type: String,
  },
  sem: {
    type: String,
  },
  branch: {
    type: String,
  },
  weight: {
    type: Number,
  },
  bloodtype: {
    type: String,
  },
  healthcon: {
    type: String,
  },
});

module.exports = monoose.model("User", dataModel);
