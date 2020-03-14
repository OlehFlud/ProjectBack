const dataBase = require('../../dataBase').getInstance();

module.exports = async room_id => {

    const RoomModel = dataBase.getModel('Room');
    const room = await RoomModel.findByPk(room_id);

    if (!room) {
        throw new Error('in DataBase such room is doesn’t exist');
    }
    return room;
};
