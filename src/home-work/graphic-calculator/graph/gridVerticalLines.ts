import { Coordinates } from '../utils/coordinates.js';
import { Line } from './line.js';
import { Canvas } from '../utils/canvas.js';
import { GridNumericSettings } from '../settings/gridNumericSettings.js';

export class GridVerticalLines {
    constructor(private gridSettings: GridNumericSettings) {}

   /**
   * @description calculates vertical lines using the cordinates
   *              of the lines at the edges
   * @param mostLeftLine line at the left edge
   * @param mostRightLine line at the right edge
   * @returns a vector with every vertical line
   */
  public calculateVerticalLines(): Line[] {
    const MOST_LEFT_LINE: Line = this.calculateMostLeftLine(this.gridSettings.getCanvas());
    const MOST_RIGHT_LINE: Line = this.calculateMostRightLine(this.gridSettings.getCanvas());
    let lines: Line[] = [];
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
  private calculateMostLeftLine(canvas: Canvas): Line {
    const MOST_LEFT_TOP_COORDINATES = 
              new Coordinates(-canvas.getWidth(), canvas.getWidth());
    const MOST_LEFT_BOTTOM_COORDINATES = 
              new Coordinates(canvas.getWidth(), canvas.getWidth());
    return new Line(MOST_LEFT_TOP_COORDINATES, MOST_LEFT_BOTTOM_COORDINATES);
  }

  /**
   * @description calculates the line at the right edge of the canvas
   * @param canvasWrapper the canvas
   * @returns line at the right edge
   */
  private calculateMostRightLine(canvasWrapper: Canvas): Line {
    const MOST_RIGHT_TOP_COORDINATES = 
              new Coordinates(canvasWrapper.getWidth(), canvasWrapper.getHeight());
    const MOST_RIGHT_BOTTOM_COORDINATES = 
              new Coordinates(canvasWrapper.getWidth(), -canvasWrapper.getWidth());
    return new Line(MOST_RIGHT_TOP_COORDINATES, MOST_RIGHT_BOTTOM_COORDINATES);
  }
}