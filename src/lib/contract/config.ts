// TODO: schema.json file.

/**
 * KxConfig definition.
 */
export interface KxConfig {
	/**
	 * Absolute path to the target directory to read the files from.
	 */
	workingDirectory: string,
	/**
	 * File extensions to read.
	 * `ts`, `html`, `scss`
	 */
	filesToCheck: string[],
	/**
	 * Folders to exclude from the reading.
	 */
	excludedFolderNames: string[],
	/**
	 * Rules to run.
	 */
	rules: {
		/** A rule to check if a component is unused. */
		unusedComponents: {
			/** Check if the component has no references by its class name. */
			byClassName: {
				isEnabled: boolean
			},
			/** Check if the component has no references by its selector. */
			bySelector: {
				isEnabled: boolean
			}
		},
		/** A rule to check @Injectable()s if they are not referenced by class name. */
		unusedInjectables: {
			isEnabled: boolean
		},
		/** A rule to check REDUX/NGRX files if they are @Injectable(). */
		ngrxPattern: {
			checkInjectable: {
				isEnabled: boolean
			}
		},
		/** A rule to check if the given TS file uses default imports from any of it parent folders. */
		circluarDependencies: {
			isEnabled: boolean
		},
		/** A rule to check `store.pipe(select())` instead of `store.select()`. */
		storeSelect: {
			isEnabled: boolean
		},
		/** A rule to check if the given class/method/property has a @deprecated comment. */
		deprecationComments: {
			isEnabled: boolean
		},
		/** A rule to check if any of the CSS rules is unused. */
		unusedCss: {
			isEnabled: boolean
		},
		/** A rule to check TODO comments within the codebase. */
		todoComments: {
			isEnabled: boolean
		}
	}
}
