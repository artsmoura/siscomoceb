const churchData = require("../mock/churchMock");
const ChurchSchema = require('../models/churchSchema.js');

const churchInsertBD = (church) => {
    const churchBD = new ChurchSchema(church);
    churchBD.save();
};

churchData.forEach((church) => !ChurchSchema.findOne({ id: church.id }) && churchInsertBD());

const getChurch = async (req, res) => {
    try {
        const church = await ChurchSchema.find();
        res.status(200).json(church);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = { getChurch };