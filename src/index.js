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
    AxiosClient: require("./interface/i_AxiosClient"),
    Config: require('./interface/i_config'),
    FindInArray: require('./interface/i_FindInArray'),
  },
};