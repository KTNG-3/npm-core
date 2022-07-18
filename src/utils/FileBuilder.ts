//import

import * as process from 'process';
import * as fs from 'fs';

//function

function FoldersBuilder(path: string) {
    if (!path.startsWith('/')) {
        path = `/${path}`;
    }

    let _path: string = `${process.cwd()}`;

    for (const _folder of String(path).split('/')) {
        _path += `\\${_folder}`;

        if (!fs.existsSync(_path)) {
            fs.mkdirSync(_path);
        } else {
            continue;
        }
    }
}

//export

export { FoldersBuilder };