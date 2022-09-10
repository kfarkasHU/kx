import { KxRecursiveDirectory } from "../../contract"
import { KxDirectoryReader, pathJoin } from "../../core"

export class KxRecursiveDirectoryReader {
	
	/**
	 * Reads the content of a directory recursively.
	 * @param {string} directoryAbsolutePath The directorys absolute path.
	 * @returns {KxRecursiveDirectory} The recursive directory content.
	 */
	public static read(directoryAbsolutePath: string): KxRecursiveDirectory {
		return this.readDirectoryRecusively(directoryAbsolutePath);
	}

	private static readDirectoryRecusively(path: string): KxRecursiveDirectory {
		const { files, directories } = KxDirectoryReader.read(path);
		const subDirectories = directories.map(m => this.readDirectoryRecusively(pathJoin(path, m)));

		return {
			path,
			files,
			directories: subDirectories
		}
	}
}