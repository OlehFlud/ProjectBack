const {EMAIL_ACTION} = require('../constant')

module.exports = {
    [EMAIL_ACTION.USER_REGISTER]: {
        subject: '[Lviv Hotel] Welcome',
        templateFileName: 'welcome'
    },
    [EMAIL_ACTION.USER_FORGOT_PASSWORD]: {
        subject: '[Lviv Hotel] Forgot Password',
        templateFileName: 'userForgotPassword'
    }
}
