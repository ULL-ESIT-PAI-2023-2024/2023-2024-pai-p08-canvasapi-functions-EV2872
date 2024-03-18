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
 * @desc class that draws the numbers in the axis to know the values in the graph
 */

import { Grid } from '../graph/grid.js';

/**
 * @description class that draws the numbers on the axis of a graph given a grid
 */
export class DrawGridAxisNumbers {
  /**
   * @description receives the grid of the graph where the numbers will be placed
   * @param grid area of a graph where the functions will be visualized
   */
  constructor(private grid: Grid) {}

  /**
   * @description draws every number in the axis x and y to let the user know
   *              the value of x and y
   */
  public drawNumberOnBothAxis(): void {
    let context: CanvasRenderingContext2D | null = 
        this.grid.getSettings().getCanvas().getContext();
    if (!context) throw new Error('Null context');
    this.drawNumberOnAxisX(context);
    this.drawNumberOnAxisY(context);
  }

  /**
   * @description draws the number on the axis x
   * @param context of the canvas
   */
  private drawNumberOnAxisX(context: CanvasRenderingContext2D): void {
    const LINE_SEPARATION = this.grid.getSettings().getLineSeparation();
    const HALF_WIDTH = this.grid.getSettings().getCanvas().getWidth() / 2;
    this.defaultNumberSettings(context);
    const POSITION_Y: number = -20;
    for (let x = -HALF_WIDTH; x <= HALF_WIDTH; x += LINE_SEPARATION) {
      if (x !== 0) context.fillText(`${x / LINE_SEPARATION}`, x, POSITION_Y);
    }
    context.restore();
  }

  /**
   * @description draws the number on the axis y
   * @param context of the canvas
   */
  private drawNumberOnAxisY(context: CanvasRenderingContext2D): void {
    const LINE_SEPARATION = this.grid.getSettings().getLineSeparation();
    const HALF_HEIGHT = this.grid.getSettings().getCanvas().getHeight() / 2;
    this.defaultNumberSettings(context);
    const POSITION_X: number = -10;
    for (let y = -HALF_HEIGHT; y <= HALF_HEIGHT; y += LINE_SEPARATION) {
      if (y !== 0) context.fillText(`${-y / LINE_SEPARATION}`, POSITION_X, -y);
    }
    context.restore();
  }

  /**
   * @description gives the style to the numbers
   * @param context of the canvas
   */
  private defaultNumberSettings(context: CanvasRenderingContext2D): void {
    context.font = '15px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.save(); // Save the actual state
    context.scale(1, -1);
  }
}