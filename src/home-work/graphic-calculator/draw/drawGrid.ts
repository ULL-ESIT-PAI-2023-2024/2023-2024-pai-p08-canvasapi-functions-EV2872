/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 * @copyright Copyright © 2007 Free Software Foundation, Inc. <https://fsf.org/>
 *            Everyone is permitted to copy and distribute verbatim copies of 
 *            this license document, but changing it is not allowed.
 * @author Evian Concepción Peña
 * @since March 3 2024
 * @desc class that its functionality is drawing the grid of the graph
 */

import { Line } from '../graph/line.js';
import { Draw } from './draw.js';
import { DrawLine } from './drawLine.js'
import { Canvas } from '../utils/canvas.js';
import { Grid } from '../graph/grid.js';
import { LineSettings } from '../settings/lineSettings.js';
import { DrawGridAxis } from './drawGridAxis.js'
import { DrawGridAxisNumbers } from './drawGridNumbers.js';

/**
 * @description class that draws the grid of the math graph
 */
export class DrawGrid extends Draw{
  /**
   * @description receives the canvas
   * @param canvas the canvas
   */
  constructor(canvas: Canvas) { super(canvas); }

  /**
   * @description draws the grid
   * @param grid to be draw
   * @param settings knows how the method must draw
   */
  public drawObject(grid: unknown, settings: unknown): void {
    if (!(grid instanceof Grid)) {
      throw new Error('This drawing methos just support lines');
    }
    if (!(settings instanceof LineSettings)) {
      throw new Error('This drawing settings are not supported by lines');
    }
    let context: CanvasRenderingContext2D | null = this.canvas.getContext();
    if (!context) throw new Error('NULL context');
    const LINES: Line[] = grid.calculateLinePositions();
    const DRAW_LINE= new DrawLine(this.canvas);
    for (let index = 0; index < LINES.length; index++) {
      DRAW_LINE.drawObject(LINES[index], settings);
    }
    const DRAW_AXIS = new DrawGridAxis(grid);
    DRAW_AXIS.drawBothAxis(DRAW_LINE, settings);
    const DRAW_NUMBERS = new DrawGridAxisNumbers(grid);
    DRAW_NUMBERS.drawNumberOnBothAxis();
  }
}