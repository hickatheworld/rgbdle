import BuildInfo from './BuildInfo';
import ColorInfo from './ColorInfo';

interface RGBdleProps {
	/**
	 * Data about the current build.
	 */
	build: BuildInfo;
	/*
	* All colors to play from this day.
	*/
	colors: Record<string, ColorInfo>;
	/**
	 * Context about the color if there is any.
	 */
	context?: string;
	/**
	 * The gamemode to use:
	 *  - `mania`: Mode where colors are randomly generated, as much as the user wants.
	 *  - `standard`: Mode with one color per day.
	 *  - `versus`: 1v1 mode where the user must guess the maxiumum amount of colors in a limited time. The user who guesses the highest amount of colors wins.
	 */
	mode: 'mania' | 'standard' | 'versus';
}
export default RGBdleProps;