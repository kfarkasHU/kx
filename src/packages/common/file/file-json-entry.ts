import { KxFileEntry, KxFileEntryMode } from "./file-entry";

/**
 * KxFileJson definition.
 */
export class KxFileJsonEntry<T> extends KxFileEntry {

	/**
	 * Default constructor.
	 * @param {string} _absolutePath Absolute path of the file.
	 * @param {KxFileEntryMode} _mode File access mode.
	 * @param {string} _eol End of line character.
	 */
	protected constructor(
		readonly _absolutePath: string,
		readonly _mode: KxFileEntryMode,
		readonly _eol?: string,
	) {
		super(_absolutePath, _mode, _eol);
	}

	/**
	 * Creates a new `KxFileEntry` instances.
	 * @param {string} fileAbsolutePath Absolute path of the file.
	 * @param {KxFileEntryMode} mode File access mode.
	 * @param {string} eol End of line character.
	 * @returns {KxFileJsonEntry} The file entry instance.
	 */
	public static create<T>(
		fileAbsolutePath: string,
		mode: KxFileEntryMode,
		eol?: string
	): KxFileJsonEntry<T> {
		return new KxFileJsonEntry<T>(fileAbsolutePath, mode, eol);
	}

	/**
	 * Reads the JSON content from current file.
	 * @returns {T} The read content.
	 */
	public read(): T {
		return super.reader.readFileJson<T>();
	}

	/**
	 * Writes the JSON data into current file.
	 * @param {T} data JSON data to write.
	 * @returns {boolean} Returns `true` the operation succeeded.
	 */
	public write(data: T): boolean {
		return super.writer.writeFileJson(data);
	}

}