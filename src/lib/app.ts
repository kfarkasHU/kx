import { KxRecursiveDirectoryReader } from "../packages/common";
import { KxRecursiveDirectory } from "../packages/contract";
import { KxConfigReader } from "./core";

export class KxApp {

	private readonly _configReader: KxConfigReader;
	private readonly _workingDirectory: KxRecursiveDirectory;

	/**
	 * Default constructor.
	 * @param {string} configAbsolutePath Configuration file absolute path.
	 */
	constructor(
		configAbsolutePath: string
	) {
		this._configReader = KxConfigReader.initialize(configAbsolutePath);
		this._workingDirectory = this.createWorkingDirectoryTree();
	}

	public readAllFiles() {
		
	}

	private createWorkingDirectoryTree(): KxRecursiveDirectory {
		const rootPath = this._configReader.read(true).workingDirectory;
		return KxRecursiveDirectoryReader.read(rootPath);
	}

}
