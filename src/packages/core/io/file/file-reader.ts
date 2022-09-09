import { readFileSync } from "fs";
import { EOL } from "os";

import { ensureAs } from "../../utils";

/**
 * KxFileReader definition.
 */
export class KxFileReader {

	/**
	 * Creates a new `KxFileReader` instance.
	 * @param {string} _absoluteFilePath Absolute file path.
	 * @param {string} [_eol=EOL] End of line character.
	 * @returns {KxFileReader} A new `KxFileReader` instance.
	 */
	constructor(
		private readonly _absoluteFilePath: string,
		private readonly _eol: string = EOL
	) { }

	/**
	 * Reads all line of the given file.
	 * @returns {Array<string>} File content split be current `_eol`.
	 */
	public readFileLines(): string[] {
		return this.readFileStringCore().split(this._eol);
	}

	/**
	 * Reads a file as string.
	 * @returns {string} The file content as string.
	 */
	public readFileString(): string {
		return this.readFileStringCore();
	}

	/**
	 * Reads a file as JSON encoded.
	 * @returns {T} The parsed JSON object.
	 */
	public readFileJson<T>(): T {
		const content = this.readFileStringCore();
		const object = JSON.parse(content);
		return ensureAs<T>(object);
	}

	private readFileStringCore() {
		return this.readFileCore().toString();
	}

	private readFileCore() {
		return readFileSync(this._absoluteFilePath);
	}

}
