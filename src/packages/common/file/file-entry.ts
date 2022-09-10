import { KxFileReader, KxFileWriter } from "../../core";

/**
 * Enum what represents the file access mode.
 */
export const enum KxFileEntryMode {
	/**
	 * Read-only file.
	 */
	Read,
	/**
	 * Write-only file.
	 */
	Write,
	/**
	 * Read and write a file.
	 */
	ReadWrite
}

/**
 * KxFileEntry definition.
 */
export class KxFileEntry {

	/**
	 * File reader attached to current file entry.
	 */
	protected readonly reader: KxFileReader;

	/**
	 * File writer attached to current file entry.
	 */
	protected readonly writer: KxFileWriter;

	/**
	 * Default constructor.
	 * @param {string} _absolutePath Absolute path of the file.
	 * @param {KxFileEntryMode} _mode File access mode.
	 * @param {string} _eol End of line character.
	 */
	protected constructor(
		public readonly _absolutePath: string,
		readonly _mode: KxFileEntryMode,
		public readonly _eol?: string,
	) {
		switch(_mode) {
			case KxFileEntryMode.Read:
				this.reader = this.createReader();
				break;
			case KxFileEntryMode.Write:
				this.writer = this.createWriter();
				break;
			default:
				this.reader = this.createReader();
				this.writer = this.createWriter();
		}
	}

	/**
	 * Creates a new `KxFileEntry` instances.
	 * @param {string} fileAbsolutePath Absolute path of the file.
	 * @param {KxFileEntryMode} mode File access mode.
	 * @param {string} eol End of line character.
	 * @returns {KxFileEntry} The file entry instance.
	 */
	public static create(
		fileAbsolutePath: string,
		mode: KxFileEntryMode,
		eol?: string
	): KxFileEntry {
		return new KxFileEntry(fileAbsolutePath, mode, eol);
	}

	private createReader(): KxFileReader {
		return new KxFileReader(this._absolutePath, this._eol);
	}

	private createWriter(): KxFileWriter {
		return new KxFileWriter(this._absolutePath, this._eol);
	}

}
