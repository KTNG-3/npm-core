module.exports = {
    //core
    AxiosClient: require('./core/AxiosClient'),
    AxiosCookie: require('./core/AxiosCookie'),
    Config: require('./config.js'),

    //logs
    Logs: require('./Logs/Logs'),

    //utils
    Base64: require('./utils/Base64'),
    wait: require('./utils/wait'),
}