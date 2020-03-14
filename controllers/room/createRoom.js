const {roomsService} = require('../../service');
const {room} = require('../../controllers');
const {ROOM_STATUS} = require('../../constant');
const {resolve} = require('path');
const fs = require('fs-extra');
const uuid = require('uuid').v1();

module.exports = async (req, res) => {

    try {
        const roomToCreate = req.body;
        const [photo] = req.photos;
        const appRoot = global.appRoot;
        const {room_id} = req.body;

        roomToCreate.status_id = ROOM_STATUS.NOT_RESERVED;

        const {id} = await roomsService.createRoom(roomToCreate, room_id);
        const photoDir = appRoot + `/public/room`;
        const photoExtensive = photo.name.split('.').pop();

        await fs.mkdirSync(resolve(photoDir), {recursive: true});

        const photoName = `${uuid}.${photoExtensive}`;
        await photo.mv(resolve(photoDir,photoName));
        const photoPath = `room/${photoName}`;

        await roomsService.updateRoomByParams({photo_path: photoPath}, {id});

        res.json('created');


    } catch (e) {
        res.status(400).json(e.message);
    }
};


