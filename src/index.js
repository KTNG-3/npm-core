module.exports = {
  //core
  Core: {
    AxiosClient: require("./core/AxiosClient"),
    AxiosCookie: require("./core/AxiosCookie"),
    Logs: require("./core/Logs"),
    Cache: require("./core/Cache"),
  },

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
    AxiosClientOut: require('./interface/IAxiosClientOut'),
    Cache: require('./interface/ICache'),
    Config: require('./interface/IConfig'),
    FindInArray: require('./interface/IFindInArray'),
    Update: require('./interface/IUpdate'),
  },

  //main
  Config: require('./config.js'),
  Update: require('./update'),

};