// import

import * as path from "path";
import * as process from "process";
import * as fs from "fs";
import { StreamOptions } from "stream";

// interface

export interface pathFinderConfig {
    path: string;
    name: string;
    extension?: string;
}

// function

/**
 * Find your Path
 * @param {pathFinderConfig} options Path finder options
 * @returns {string}
 */
export function pathFinder(options: pathFinderConfig): string {
    if (!options.path.startsWith("/") && !options.path.startsWith(".")) {
        options.path = `/${options.path}`;
    }

    if (options.path.endsWith("/")) {
        options.path = String(options.path).substring(0, options.path.length - 1);
    }

    if (options.extension && !options.name.endsWith(`.${options.extension}`)) {
        options.name = `${options.name}.${options.extension}`;
    }

    return path.join(`${process.cwd()}/${options.path}/${options.name}`);
}

/**
 * Create Folders
 * @param {string | Array<string>} path Path to the folder
 * @param {fs.MakeDirectoryOptions} options config
 */
export function foldersBuilder(path: string | Array<string>, options?: fs.MakeDirectoryOptions) {
    let _path = `${process.cwd()}`;

    if (typeof path === "string") {
        if (!path.startsWith("/")) {
            path = `/${path}`;
        }

        path = path.split("/");
    }

    for (const _folder of path) {
        _path += `/${_folder}`;

        if (!fs.existsSync(_path)) {
            fs.mkdirSync(_path, options);
        } else {
            continue;
        }
    }
}

/**
 * Create Files
 * @param {string} path path to the file
 * @param {string} data add data to the file
 * @param {StreamOptions} options config
 */
export function filesBuilder(path: string, data = "", options?: StreamOptions<any>) {
    if (path.endsWith("/")) {
        throw new Error(`Unknown path: ${path}`);
    }

    if (path.includes("/")) {
        foldersBuilder(path.split("/").slice(0, -1).join("/"));
    }

    const _path = `${process.cwd()}/${path}`;

    if (!fs.existsSync(_path)) {
        fs.createWriteStream(_path, options).write(String(data));
    }
}
