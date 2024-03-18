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
 * @desc astract class that draws a object
 */

import { Canvas } from '../utils/canvas.js';
import { Coordinates } from '../utils/coordinates.js';

/**
 * @description parent class for every drawing class
 */
export abstract class Draw {
  /**
   * @description receives the canvas to be draw
   * @param canvas the canvas
   */
  constructor(protected canvas: Canvas) {}

  /**
   * @description abstract function that draws a object in the canvas
   * @param object to draw, it is unkown because not every setting has the same 
   *               property
   * @param settings tells the class how to draw the object, also unkown, because
   *                  we delegate the child class
   */
  public abstract drawObject(object: unknown, settings: unknown): void;

  /**
   * @description getter for the canvas
   * @returns the canvas
   */
  public getCanvas(): Canvas { return this.canvas; }

  /**
   * @description wrapper around the context function moveTo
   * @param coordinates where to move
   */
  protected moveTo(coordinates: Coordinates): void {
    let context: CanvasRenderingContext2D | null = this.canvas.getContext();
    if (!context) throw new Error('NULL context');
    context.moveTo(coordinates.getPositionX(), coordinates.getPositionY());
  }
}