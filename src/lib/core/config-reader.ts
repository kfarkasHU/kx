import { KxFileEntryMode, KxFileJsonEntry } from "../../packages/common";
import { KxConfig } from "../contract";

/**
 * KxConfigReader definition.
 */
export class KxConfigReader extends KxFileJsonEntry<KxConfig> {

	private static _isInitialized = false;
	
	private _config: KxConfig;

	private constructor(path: string) {
		super(path, KxFileEntryMode.Read);
	}

	/**
	 * Initializes the current config reader instance.
	 * @param {string} configPath Path to the configuration file.
	 * @returns {KxConfigReader} The configuration reader instance.
	 */
	public static initialize(configPath: string): KxConfigReader {
		if(this._isInitialized) {
			throw "KxConfigReader is already initialized.";
		}
		this._isInitialized = true;
		return new KxConfigReader(configPath);
	}

	/**
	 * Reads the configuration from the file.
	 * @param {boolean} [useCache=true] Use cache to read/store the configuration.
	 * @returns {KxConfig} The current configuration.
	 */
	public read(useCache: boolean = true): KxConfig {
		if(useCache && !this._config) {
			this._config = super.read();
		}

		if(useCache && this._config) {
			return this._config;
		}

		return super.read();
	}
}