/**
 * Parses the given object to `T`.
 * @param {*} object The object to parse.
 * @returns {T} The parsed object.
 */
export function ensureAs<T>(object: unknown): T {
	return <T>object;
}
