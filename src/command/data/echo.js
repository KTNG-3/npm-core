//import
const util = require('util');

//export
module.exports = {
    data: {
        name: 'echo <data>',
        description: 'Echo the given data',
        option: [
            {
                name: '-e, --error <data>',
                description: 'Echo the given data as error',
            },
        ], 
    },
    //script
    async execute(data, {error}) {
        console.log(util.format(data));
        console.error(new Error(error));
    }
}