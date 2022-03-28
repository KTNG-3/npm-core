module.exports = {
    //core
    AxiosClient: require('./core/AxiosClient'),
    AxiosCookie: require('./core/AxiosCookie'),
    Config: require('./config.js'),

    //log
    Logs: require('./Logs/Logs'),

    //util
    Base64: require('./utils/Base64'),
    wait: require('./utils/wait'),
}