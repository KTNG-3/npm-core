module.exports = {
  //core
  Core: {
    AxiosClient: require("./core/AxiosClient"),
    AxiosCookie: require("./core/AxiosCookie"),
    Config: require("./config.js"),
  },

  //log
  Logs: require("./core/Logs"),

  //util
  Utils: {
    Base64: require("./utils/Base64"),
    wait: require("./utils/wait"),
    consoleColor: require("./utils/consoleColor"),
    Format: require("./utils/format"),
    FindInArray: require("./utils/FindInArray"),
  },
};
