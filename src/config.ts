import { cwd as CurrentWorkingDirectory } from 'process';
import { existsSync } from 'fs';

import { colored } from './utils/ConsoleColor';
import { IConfig } from './interface/IConfig';

const _path = CurrentWorkingDirectory() + '/ing3kth/config.json';

if (!existsSync(_path)) {
    throw new Error(`\nConfig file not found!, Please run ${colored("'npx ing3kth init'", 'yellow')} to create config file.\n`);
}

const _config:IConfig = require(String(_path));

export { _config };