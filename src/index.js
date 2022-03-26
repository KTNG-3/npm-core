module.exports = {
    //core
    Axios: {
        Client: require('./core/AxiosClient'),
        Cookie: require('./core/AxiosCookie'),
    },
    Config: require('./config.js'),

    //logs
    Logs: require('./Logs/Logs'),

    //utils
    Base64: require('./utils/Base64'),
    wait: require('./utils/wait'),
}