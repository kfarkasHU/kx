/**
 * Serializes the given object to JSON string.
 * @param {T} object Object to serialize.
 * @returns {string} The serialized object.
 */
export function toJson<T>(object: T): string {
	return JSON.stringify(object);
}

/**
 * Deserializes a JSON string.
 * @param {string} json The JSON string to deserialize.
 * @returns {T} The deserialized JSON object.
 */
export function fromJson<T>(json: string): T {
	return JSON.parse(json);
}