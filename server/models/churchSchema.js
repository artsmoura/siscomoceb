const mongoose = require("mongoose");

const churchSchema = mongoose.Schema({
    _id: String,
    name: String,
});

const ChurchSchema = mongoose.model('Church', churchSchema);

module.exports = ChurchSchema;