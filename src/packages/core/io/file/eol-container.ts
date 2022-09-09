import { EOL } from "os";

/**
 * KxEolContainer definition.
 */
export abstract class KxEolContainer {

	/**
	 * Creates a new `KxEolContainerInstance`.
	 * @param {string} [_eol=EOL] End of line character.
	 * @returns {KxEolContainer} A new `KxEolContainer` instance.
	 */
	constructor(
		protected readonly _eol: string = EOL
	) { }
}