//import
import { Update as IngCoreUpdate } from '../../update';
import * as consoleColor from '../../utils/ConsoleColor';

//export
export default {
    data: {
        name: 'update',
        description: 'Check for updates',
        option: [], 
    },
    //script
    async execute():Promise<void> {
        const _update = await IngCoreUpdate.checkForUpdate();

        console.log(`\n${_update.response}\n`);

        if(_update.data.update && _update.data.update.length <= 0){
            return;
        }

        for(const updateList of _update.data.update){
            console.log(`${consoleColor.colored(String(updateList.name), 'cyan')}: ${consoleColor.colored(String(updateList.version.current), 'red')} --> ${consoleColor.colored(String(updateList.version.latest), 'green')}`);
        }

        console.log(``);
    }
};