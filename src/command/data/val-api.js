//import
const { series } = require('async');
const { exec } = require('child_process');

//export
module.exports = {
    data: {
        name: 'val-api',
        description: '@ing3kth/val-api Configuration',
        option: [
            {
                name: '-i, --install',
                description: 'Install @ing3kth/val-api',
            },
        ], 
    },
    //script
    async execute({install}) {
        if(install){
            series([
                () => exec('npm install @ing3kth/val-api'),
            ]);
            return;
        }

        console.log("\n@ing3kth/val-api is npm package for get data from VALORANT API.\n");
    }
}