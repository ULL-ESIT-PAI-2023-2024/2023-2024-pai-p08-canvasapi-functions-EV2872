import { Coordinates } from '../utils/coordinates.js';
import { Line } from './line.js';
export class GridVerticalLines {
    gridSettings;
    constructor(gridSettings) {
        this.gridSettings = gridSettings;
    }
    /**
    * @description calculates vertical lines using the cordinates
    *              of the lines at the edges
    * @param mostLeftLine line at the left edge
    * @param mostRightLine line at the right edge
    * @returns a vector with every vertical line
    */
    calculateVerticalLines() {
        const MOST_LEFT_LINE = this.calculateMostLeftLine(this.gridSettings.getCanvas());
        const MOST_RIGHT_LINE = this.calculateMostRightLine(this.gridSettings.getCanvas());
        let lines = [];
        const START_X = MOST_LEFT_LINE.getLeftVertexX();
        const END_X = MOST_RIGHT_LINE.getLeftVertexX();
        const TOP_Y = MOST_LEFT_LINE.getLeftVertexY();
        const BOTTOM_Y = MOST_RIGHT_LINE.getRightVertexY();
        for (let x = START_X; x <= END_X; x += this.gridSettings.getLineSeparation()) {
            const TOP_COORDINATES = new Coordinates(x, TOP_Y);
            const BOTTOM_COORDINATES = new Coordinates(x, BOTTOM_Y);
            let line = new Line(TOP_COORDINATES, BOTTOM_COORDINATES);
            lines.push(line);
        }
        return lines;
    }
    /**
     * @description calculates the line at the left edge of the canvas
     * @param canvas the canvas
     * @returns line at the left edge
     */
    calculateMostLeftLine(canvas) {
        const MOST_LEFT_TOP_COORDINATES = new Coordinates(-canvas.getWidth(), canvas.getWidth());
        const MOST_LEFT_BOTTOM_COORDINATES = new Coordinates(canvas.getWidth(), canvas.getWidth());
        return new Line(MOST_LEFT_TOP_COORDINATES, MOST_LEFT_BOTTOM_COORDINATES);
    }
    /**
     * @description calculates the line at the right edge of the canvas
     * @param canvasWrapper the canvas
     * @returns line at the right edge
     */
    calculateMostRightLine(canvasWrapper) {
        const MOST_RIGHT_TOP_COORDINATES = new Coordinates(canvasWrapper.getWidth(), canvasWrapper.getHeight());
        const MOST_RIGHT_BOTTOM_COORDINATES = new Coordinates(canvasWrapper.getWidth(), -canvasWrapper.getWidth());
        return new Line(MOST_RIGHT_TOP_COORDINATES, MOST_RIGHT_BOTTOM_COORDINATES);
    }
}
