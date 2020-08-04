const monoose = require("mongoose");

const dataModel = monoose.Schema({
  branch: {
    type: String,
  },
  bloodtype: {
    type: String,
  },
});

module.exports = monoose.model("Search", dataModel);
