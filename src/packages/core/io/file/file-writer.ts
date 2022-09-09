import { writeFileSync } from "fs";

import { concatBy, toJson } from "../../utils";

import { KxEolContainer } from "./eol-container";

/**
 * KxFileWriter definition.
 */
export class KxFileWriter extends KxEolContainer {

	/**
	 * Creates a new `KxFileReader` instance.
	 * @param {string} _absoluteFilePath Absolute file path.
	 * @param {string} [_eol=EOL] End of line character.
	 * @returns {KxFileWriter} A new `KxFileReader` instance.
	 */
	constructor(
		private readonly _absoluteFilePath: string,
		_eol: string
	) {
		super(_eol)
	}

	/**
	 * Writes the specified lines to the file.
	 * @param {string[]} lines Lines to write.
	 * @returns {boolean} Returns `true` if the operation succeeded.
	 */
	public writeFileLines(lines: string[]): boolean {
		const content = concatBy(lines, this._eol);
		return this.writeFileCore(content);
	}

	/**
	 * Writes the given content to a file.
	 * @param {string} content Content to write.
	 * @returns {boolean} Returns `true` if the operation succeeded.
	 */
	public writeFileString(content: string): boolean {
		return this.writeFileCore(content);
	}

	/**
	 * 
	 * @param object 
	 * @returns {boolean} Returns `true` if the operation succeeded.
	 */
	public writeFileJson<T>(object: T): boolean {
		const content = toJson(object);
		return this.writeFileCore(content);
	}

	public writeFileCore(data: string) {
		try {
			writeFileSync(this._absoluteFilePath, data);
		} catch {
			return false;
		}
		return true;
	}

}