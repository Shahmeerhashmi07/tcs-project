var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var materialSchema = new Schema({
    
  books: { type: String, required: true },

  stationary: { type: String, required: true },
});

module.exports = mongoose.model("Material", materialSchema);