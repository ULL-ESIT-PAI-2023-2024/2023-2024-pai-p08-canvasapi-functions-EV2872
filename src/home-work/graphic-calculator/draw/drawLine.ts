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
 * @desc class that its functionality is drawing lines
 */

import { Line } from '../graph/line.js';
import { Draw } from './draw.js';
import { Canvas } from '../utils/canvas.js';
import { LineSettings } from '../settings/lineSettings.js'

/**
 * @description class that draws lines
 */
export class DrawLine extends Draw{
  /**
   * @description receives the canvas
   * @param canvas the canvas
   */
  constructor(canvas: Canvas) { super(canvas); }

  /**
   * @description method that draws a line
   * @param line object that contains the line coordinates
   * @param settings tells the method the drawing style
   */
  public drawObject(line: unknown, settings: unknown): void {
    if (!(line instanceof Line)) {
      throw new Error('This drawing methos just support lines');
    }
    if (!(settings instanceof LineSettings)) {
      throw new Error('This drawing settings are not supported by lines');
    }
    let context: CanvasRenderingContext2D | null = this.canvas.getContext();
    if (!context) throw new Error('NULL context');
    context.beginPath();
    this.moveTo(line.getLeftVertex());
    context.lineTo(line.getRightVertexX(), line.getRightVertexY());
    context.strokeStyle = settings.getColor();
    context.lineWidth = settings.getPixelWidth();
    context.setLineDash(settings.getDash())
    context.stroke();
    context.closePath();
  }
}