//import
const util = require("util");

//export
module.exports = {
  data: {
    name: "echo <data>",
    description: "Echo the given data",
    option: [
      {
        name: "-e, --error <error>",
        description: "Echo the given data as error",
      },
    ],
  },
  //script
  async execute(data, { error }) {
    console.log(util.format(data));

    if (error) {
      console.error(new Error(error));
    }
  },
};
