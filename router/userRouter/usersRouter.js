const router = require('express').Router();
const {user} = require('../../controllers');
const {user: userMiddleware} = require('../../middleware');

router.post('/', userMiddleware.checkUserValidityMiddleware, user.createUser);

router.get('/findAllUser', user.findAllUser);

router.delete('/:user_id', user.deleteUser);

router.patch('/:user_id', user.updateUser);

module.exports = router;
