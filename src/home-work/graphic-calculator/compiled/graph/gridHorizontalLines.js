import { Coordinates } from '../utils/coordinates.js';
import { Line } from './line.js';
export class GridHorizontalLines {
    gridSettings;
    constructor(gridSettings) {
        this.gridSettings = gridSettings;
    }
    /**
   * @description calculates horizontal lines using the cordinates
   *              of the lines at the edges
   * @param bottomLine line at the bottom edge
   * @param topLine line at the top edge
   * @returns a vector with every horizontal line
   */
    calculateHorizontalLines() {
        const BOTTOM_LINE = this.calculateBottomLine(this.gridSettings.getCanvas());
        const TOP_LINE = this.calculateTopLine(this.gridSettings.getCanvas());
        const START_Y = TOP_LINE.getLeftVertexY();
        const END_Y = BOTTOM_LINE.getLeftVertexY();
        let lines = [];
        for (let y = START_Y; y >= END_Y; y -= this.gridSettings.getLineSeparation()) {
            const MOST_LEFT_COORDINATES = new Coordinates(TOP_LINE.getLeftVertexX(), y);
            const MOST_RIGHT_COORDINATES = new Coordinates(TOP_LINE.getRightVertexX(), y);
            let line = new Line(MOST_LEFT_COORDINATES, MOST_RIGHT_COORDINATES);
            lines.push(line);
        }
        return lines;
    }
    /**
     * @description calculates the line at the top of the canvas
     * @param canvas the canvas
     * @returns line ath the top
     */
    calculateTopLine(canvas) {
        const TOP_LEFT_COORDINATES = new Coordinates(-canvas.getWidth(), canvas.getHeight());
        const TOP_RIGHT_COORDINATES = new Coordinates(canvas.getWidth(), canvas.getHeight());
        return new Line(TOP_LEFT_COORDINATES, TOP_RIGHT_COORDINATES);
    }
    /**
     * @description calculates the line at the bottom of the canvas
     * @param canvas the canvas
     * @returns line ath the bottom
     */
    calculateBottomLine(canvas) {
        const BOTTOM_LEFT_COORDINATES = new Coordinates(-canvas.getWidth(), -canvas.getHeight());
        const BOTTOM_RIGHT_COORDINATES = new Coordinates(+canvas.getWidth(), -canvas.getHeight());
        return new Line(BOTTOM_LEFT_COORDINATES, BOTTOM_RIGHT_COORDINATES);
    }
}
