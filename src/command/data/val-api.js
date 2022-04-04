//import
const consoleColor = require('../../utils/consoleColor');

//export
module.exports = {
    data: {
        name: 'val-api',
        description: '@ing3kth/val-api Configuration',
        option: [
            {
                name: '-i, --install',
                description: 'How To Install @ing3kth/val-api',
            },
        ], 
    },
    //script
    async execute({install}) {
        if(install){
            console.log(`\nRun ${consoleColor.effect.underscore}${consoleColor.colored("npm install @ing3kth/val-api", 'yellow')} In Terminal.`);
            return;
        }

        console.log(`\n${consoleColor.colored("@ing3kth/val-api", 'yellow')} is npm package for get data from VALORANT.\n`);
    }
}