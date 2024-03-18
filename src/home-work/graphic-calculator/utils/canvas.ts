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
 * @desc class that stores a canvas
 */

/**
 * @description wrapper around a canvas that gives you access to relevant
 *              information
 */
export class Canvas {
  /**
   * @description receives a canvas that will be stored
   * @param canvas, where we will draw
   */
  constructor(private canvas: HTMLCanvasElement = 
    document.getElementById('myCanvas') as HTMLCanvasElement) {}

  /**
   * @description getter for the canvas context
   * @returns the context if found
   */
  public getContext(): CanvasRenderingContext2D | null {
    return this.canvas.getContext('2d')
  }

  /**
   * @description getter for the canvas
   * @returns the canvas
   */
  public getCanvas(): HTMLCanvasElement { return this.canvas; }

  /**
   * @description getter for the canvas width
   * @returns return the width
   */
  public getWidth(): number { return this.canvas.width; }

  /**
   * @description getter for the canvas height
   * @returns return the height
   */
  public getHeight(): number { return this.canvas.height; }
}