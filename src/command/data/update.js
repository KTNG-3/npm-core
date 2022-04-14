//import
const IngCoreUpdate = require('../../update');
const consoleColor = require('../../utils/consoleColor');

//export
module.exports = {
    data: {
        name: 'update',
        description: 'Check for updates',
        option: [], 
    },
    //script
    async execute() {
        const _update = await IngCoreUpdate.checkForUpdate();

        console.log(`\n${_update.response}\n`);

        if(_update.data && _update.data.length <= 0){
            return;
        }

        _update.data.forEach(updateList => {
            console.log(`${consoleColor.colored(updateList.name, 'cyan')}: ${consoleColor.colored(updateList.version.current, 'red')} --> ${consoleColor.colored(updateList.version.latest, 'green')}`);
        });
        console.log(`\n`);
    }
}