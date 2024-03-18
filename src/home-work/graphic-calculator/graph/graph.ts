/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @copyright Copyright © 2007 Free Software Foundation, Inc. <https://fsf.org/>
 *            Everyone is permitted to copy and distribute verbatim copies of 
 *            this license document, but changing it is not allowed.
 * @author Evian Concepción Peña
 * @since March 3 2024
 * @desc class that represents a math graph and can deply many functions
 *       at the same time
 */

import { Grid } from './grid.js'
import { Function } from '../functions/function.js'
import { DrawFunction } from '../draw/drawFunction.js'
import { FunctionSettings } from '../settings/functionSettings.js'
import { LineSettings } from '../settings/lineSettings.js';
import { DrawGrid } from '../draw/drawGrid.js';
import { GridNumericSettings } from '../settings/gridNumericSettings.js';

/**
 * @description represents a math graph using position (x, y)
 */
export class Graph {
  /**
   * @description stores the grid and the settings that will draw the grid
   * @param grid area where the function will be draw
   * @param drawLineSettings style used to draw the grid lines
   */
  constructor(private grid: Grid, private drawLineSettings: LineSettings) {
    this.drawGrid();
  }

  /**
   * @description gettern from graph settings
   * @returns graph settings
   */
  public getGraphSettings(): GridNumericSettings { return this.grid.getSettings(); }

  /**
   * @description draws the given function in the canvas used by the graph
   * @param mathFunction function to be draw
   * @param functionSettings has the parameters to draw the function
   */
  public drawFunction(mathFunction: Function, functionSettings: FunctionSettings): void {
    const DRAW_FUNCTION = new DrawFunction(this.grid.getSettings().getCanvas());
    DRAW_FUNCTION.drawObject(mathFunction, functionSettings);
  }

  /**
   * @description draws the grid using the line settings
   */
  private drawGrid(): void {
    const DRAW_GRID = new DrawGrid(this.grid.getSettings().getCanvas());
    DRAW_GRID.drawObject(this.grid, this.drawLineSettings);
  }
}