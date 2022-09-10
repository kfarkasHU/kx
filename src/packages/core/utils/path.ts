import { join } from "path";

/**
 * Concats two segments of a path.
 * @param {string} base The base path to concat to.
 * @param {string} entry The new entry's relative location.
 * @returns {string} The newly created path.
 */
export function pathJoin(base: string, entry: string): string {
	return join(base, entry);
}