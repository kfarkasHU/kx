export interface KxBaseDirectory<T> {
	path: string;
	files: string[];
	directories: T[]
}