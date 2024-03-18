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
 * @desc abstract class that works as template for child classes to store
 *       settings
 */

/**
 * @description class that delegates in the child classes what settings must be stored
 *              except the common ones
 */
export abstract class Settings {
  /**
   * @description receives the color and the thickness
   * @param color used for the child classes to tell draw classes how to draw
   * @param pixelWidth used for the child classes to tell draw classes how to draw
   */
  constructor(private color: string = 'Black', private pixelWidth: number = 1) {}

  /**
   * @description getter for the color
   * @returns a string with the given color, can be rgba format
   */
  public getColor(): string { return this.color; }

  /**
   * @description getter for the pixel thickness
   * @returns pixel thickness value
   */
  public getPixelWidth(): number { return this.pixelWidth; }
}