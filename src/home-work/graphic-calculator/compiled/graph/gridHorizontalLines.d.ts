import { Line } from './line.js';
import { GridNumericSettings } from '../settings/gridNumericSettings.js';
export declare class GridHorizontalLines {
    private gridSettings;
    constructor(gridSettings: GridNumericSettings);
    /**
   * @description calculates horizontal lines using the cordinates
   *              of the lines at the edges
   * @param bottomLine line at the bottom edge
   * @param topLine line at the top edge
   * @returns a vector with every horizontal line
   */
    calculateHorizontalLines(): Line[];
    /**
     * @description calculates the line at the top of the canvas
     * @param canvas the canvas
     * @returns line ath the top
     */
    private calculateTopLine;
    /**
     * @description calculates the line at the bottom of the canvas
     * @param canvas the canvas
     * @returns line ath the bottom
     */
    private calculateBottomLine;
}
