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
 * @desc class that draws the axis lines of the grid used by the graph
 */

import { Line } from '../graph/line.js';
import { DrawLine } from './drawLine.js'
import { Grid } from '../graph/grid.js';
import { LineSettings } from '../settings/lineSettings.js';

/**
 * @description class that draws the axis of a graph given a grid
 */
export class DrawGridAxis {
  /**
   * @description default so we dont see dashing on the asix
   */
  private dash: [number, number] = [1, 0];
  /**
   * @description to adjust the thickness
   */
  private pixelWidth: number = 5;

  /**
   * @description receives the grid where the axis will be draw
   * @param grid needed to adjust the axis in the middle
   */
  constructor(private grid: Grid) {}

  /**
   * @description draws both asix
   * @param drawLine object that draws lines given the settings
   * @param settings tells the draw line object how to draw
   */
  public drawBothAxis(drawLine: DrawLine, settings: LineSettings): void {
    this.drawAxisX(drawLine, settings);
    this.drawAxisY(drawLine, settings);
  }

  /**
   * @description draws the axis x
   * @param drawLine object that draws lines given the settings
   * @param settings tells the draw line object how to draw
   */
  private drawAxisX(drawLine: DrawLine, settings: LineSettings): void {
    const SETTINGS_AXIS = 
            new LineSettings(settings.getColor(), this.pixelWidth, this.dash);
    const MIDDLE_VERTICAL_LINE: Line = this.grid.getMiddleAxisY();
    drawLine.drawObject(MIDDLE_VERTICAL_LINE, SETTINGS_AXIS);
    const MIDDLE_HORIZONTAL_LINE: Line = this.grid.getMiddleAxisX();
    drawLine.drawObject(MIDDLE_HORIZONTAL_LINE, SETTINGS_AXIS);
  }

  /**
   * @description draws the axis y
   * @param drawLine object that draws lines given the settings
   * @param settings tells the draw line object how to draw
   */
  private drawAxisY(drawLine: DrawLine, settings: LineSettings): void {
    const DASH: [number, number] = [1, 0];
    const PIXEL_WIDTH: number = 5;
    const SETTINGS_AXIS = new LineSettings(settings.getColor(), PIXEL_WIDTH, DASH);
    const MIDDLE_VERTICAL_LINE: Line = this.grid.getMiddleAxisY();
    drawLine.drawObject(MIDDLE_VERTICAL_LINE, SETTINGS_AXIS);
    const MIDDLE_HORIZONTAL_LINE: Line = this.grid.getMiddleAxisX();
    drawLine.drawObject(MIDDLE_HORIZONTAL_LINE, SETTINGS_AXIS);
  }
}