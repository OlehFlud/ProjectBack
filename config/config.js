module.exports = {
    JWT_SECRET: 'My_Secret_word',
    JWT_REFRESH: 'My_SUPER_secret_word',

    PORT: process.env.PORT || 4444,
    ROOT_EMAIL: process.env.ROOT_EMAIL || 'email',
    ROOT_EMAIL_PASSWORD:process.env.ROOT_EMAIL_PASSWORD || 'pass',
    ROOT_EMAIL_SERVICE:process.env.ROOT_EMAIL_SERVICE || 'gmail',

    FRONTEND_URL:process.env.FRONTEND_URL || 'http://localhost:3000'
}
