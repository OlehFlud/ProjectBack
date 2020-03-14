const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        // const RoomModel = dataBase.getModel('Room');

        // const findAll = await RoomModel.find()


    }
    catch (e) {
        res.status(400).json(e.message)
    }
};
