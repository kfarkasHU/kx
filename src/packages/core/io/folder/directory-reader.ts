import { readdirSync } from "fs";

import { isDirectory, isFile } from "../../utils";
import { KxDirectory } from "../../../contract";

/**
 * KxDirectoryReader definition.
 */
export class KxDirectoryReader {

	/**
	 * Reads the content of the given directory.
	 * @param {string} directoryAbsolutePath Absolute path to the directory to read.
	 * @returns {KxDirectory} Directory content.
	 */
	public static read(directoryAbsolutePath: string): KxDirectory {
		const content = readdirSync(directoryAbsolutePath);
		
		const files: string[] = [];
		const directories: string[] = [];

		for(const entry of content) {
			if(isDirectory(entry)) {
				directories.push(entry);
			} else if (isFile(entry)) {
				files.push(entry);
			} else {
				throw `Could not determine the entry type!`
			}
		}

		return {
			directories,
			files,
			path: directoryAbsolutePath
		}
	}
}
