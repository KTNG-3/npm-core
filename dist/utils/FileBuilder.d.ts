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
export { FoldersBuilder, FilesBuilder };
