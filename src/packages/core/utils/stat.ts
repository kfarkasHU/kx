import { statSync } from "fs";

/**
 * Checks if the given path is a directory.
 * @param {string} absolutePath Absolute path of the given entry.
 * @returns {boolean} `true` if the given path is a directory.
 */
export function isDirectory(absolutePath: string): boolean {
	return statSync(absolutePath).isDirectory();
}

/**
 * Checks if the given path is a file.
 * @param {string} absolutePath Absolute path of the given entry.
 * @returns {boolean} `true` if the given path is a file.
 */
export function isFile(absolutePath: string): boolean {
	return statSync(absolutePath).isFile();
}