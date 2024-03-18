import { Line } from './line.js';
import { GridNumericSettings } from '../settings/gridNumericSettings.js';
export declare class GridVerticalLines {
    private gridSettings;
    constructor(gridSettings: GridNumericSettings);
    /**
    * @description calculates vertical lines using the cordinates
    *              of the lines at the edges
    * @param mostLeftLine line at the left edge
    * @param mostRightLine line at the right edge
    * @returns a vector with every vertical line
    */
    calculateVerticalLines(): Line[];
    /**
     * @description calculates the line at the left edge of the canvas
     * @param canvas the canvas
     * @returns line at the left edge
     */
    private calculateMostLeftLine;
    /**
     * @description calculates the line at the right edge of the canvas
     * @param canvasWrapper the canvas
     * @returns line at the right edge
     */
    private calculateMostRightLine;
}
