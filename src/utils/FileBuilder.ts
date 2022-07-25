//import

import * as path from 'path';
import * as process from 'process';
import * as fs from 'fs';

//function

/**
 * Find your Path
 * @param {{ path: string, name: string, extension?: string }} options Path finder options
 * @returns {string}
 */
function PathFinder(options: {
    path: string,
    name: string, extension?: string
}): string {
    if (!options.path.startsWith('/') && !options.path.startsWith('.')) {
        options.path = `/${options.path}`;
    }

    if (options.path.endsWith('/')) {
        options.path = String(options.path).substring(0, options.path.length - 1);
    }

    if (options.extension && !options.name.endsWith(`.${options.extension}`)) {
        options.name = `${options.name}.${options.extension}`;
    }

    return path.join(`${process.cwd()}/${options.path}/${options.name}`);
}

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

export {
    PathFinder,
    FoldersBuilder, FilesBuilder
};