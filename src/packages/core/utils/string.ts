/**
 * Concants the given string array by a specified delimiter.
 * @param {string} subStr A string array to concatenate.
 * @param {string} by The delimiter to concat by.
 * @returns {string} The concatenated string.
 */
export function concatBy(subStr: string[], by: string): string {
	return subStr.join(by);
}