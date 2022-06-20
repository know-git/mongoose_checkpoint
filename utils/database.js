const mongoose = require("mongoose");
const connection = mongoose.createConnection(
  "mongodb://localhost:27017/mongoose_checkpoint"
);
module.exports = connection;
