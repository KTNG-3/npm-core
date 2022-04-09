module.exports = {
  //core
  Core: {
    AxiosClient: require("./core/AxiosClient"),
    AxiosCookie: require("./core/AxiosCookie"),
    Logs: require("./core/Logs"),
    Cache: require("./core/Cache"),
  },

  //config
  Config: require("./config.js"),

  //util
  Utils: {
    Base64: require("./utils/Base64"),
    wait: require("./utils/wait"),
    consoleColor: require("./utils/consoleColor"),
    Format: require("./utils/format"),
    FindInArray: require("./utils/FindInArray"),
  },
  
  //interface
  Interface: {
    AxiosClient: require('./interface/IAxiosClient'),
    Cache: require('./interface/ICache'),
    Config: require('./interface/IConfig'),
    FindInArray: require('./interface/IFindInArray'),
  },
};