/**
 * Find your Path
 * @param {{ path: string, name: string, extension?: string }} options Path finder options
 * @returns {string}
 */
declare function PathFinder(options: {
    path: string;
    name: string;
    extension?: string;
}): string;
/**
 * Create Folders
 * @param path Path to the folder
 */
declare function FoldersBuilder(path: string | Array<string>): void;
/**
 * Create Files
 * @param path path to the file
 * @param data add data to the file
 */
declare function FilesBuilder(path: string, data?: string): void;
export { PathFinder, FoldersBuilder, FilesBuilder };
