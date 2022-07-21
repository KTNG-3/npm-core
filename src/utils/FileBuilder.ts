//import

import * as process from 'process';
import * as fs from 'fs';

//function

/**
 * Create Folders
 * @param path Path to the folder
 */
function FoldersBuilder(path: string | Array<string>) {
    let _path: string = `${process.cwd()}`;
    
    if (typeof path === 'string') {
        if (!path.startsWith('/')) {
            path = `/${path}`;
        }

        path = path.split('/');
    }

    for (const _folder of path) {
        _path += `/${_folder}`;

        if (!fs.existsSync(_path)) {
            fs.mkdirSync(_path);
        } else {
            continue;
        }
    }
}

/**
 * Create Files
 * @param path path to the file
 * @param data add data to the file
 */
function FilesBuilder(path: string, data: string = '') {
    if (path.endsWith('/')) {
        throw new Error(
            `Unknown path: ${path}`
        );
    }

    if (path.includes('/')) {
        FoldersBuilder(path.split('/').slice(0, -1).join('/'));
    }

    let _path: string = `${process.cwd()}/${path}`;

    if (!fs.existsSync(_path)) {
        fs.createWriteStream(_path).write(String(data));
    }
}

//export

export { FoldersBuilder, FilesBuilder };