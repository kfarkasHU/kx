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

	protected readonly reader: KxFileReader;
	protected readonly writer: KxFileWriter;

	private constructor(
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
	 * @returns 
	 */
	public static create(
		fileAbsolutePath: string,
		mode: KxFileEntryMode,
		eol?: string
	) {
		return new KxFileEntry(fileAbsolutePath, mode, eol);
	}

	private createReader(): KxFileReader {
		return new KxFileReader(this._absolutePath, this._eol);
	}

	private createWriter(): KxFileWriter {
		return new KxFileWriter(this._absolutePath, this._eol);
	}

}
