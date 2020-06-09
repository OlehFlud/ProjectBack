const {usersService, emailService} = require('../../service');
const {passwordHashed} = require('../../helpers');
const {USER_ROLES, USER_STATUS, EMAIL_ACTION} = require('../../constant');

module.exports = async (req, res) => {
    try {
        const creatingData = req.body;
        const appRoot = global.appRoot;
        creatingData.password = await passwordHashed(creatingData.password);
        const userToCreate = req.body;
        const {user_id} = req.body;

        userToCreate.role_id = USER_ROLES.USER;
        userToCreate.status_id = USER_STATUS.ACTIVE;

        await usersService.createUser(userToCreate, user_id);
        await emailService.emailService.sendMail(userToCreate.email, EMAIL_ACTION.USER_REGISTER,
            {userName: userToCreate.name}
        );
        res.json('created');

    } catch (e) {
        res.status(400).json(e.message);
    }
};


