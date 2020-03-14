const {roomsService} = require('../../service');

module.exports = async ( req, res, next) => {

    try {

        const { room_id } =req.params;

        const isRoomPresent = await roomsService.getRoomById(room_id);

        if (!isRoomPresent){
            throw new Error(`Room with ID ${room_id} is not present`)
        }

        req.room = isRoomPresent.dataValues;

        console.log(isRoomPresent.dataValues);

        next();

    } catch (e) {

        res.status(400).json(e.message);

    }
};

