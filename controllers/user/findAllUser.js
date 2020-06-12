const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const UserModel = dataBase.getModel('User');

        const findAllUser = await UserModel.findAll();

        console.log(findAllUser);

        if (!findAllUser.length) {
            throw new Error('users not found');
        }

        res.json(findAllUser);
    } catch (e) {
        res.status(400).json(e.message)
    }
};
