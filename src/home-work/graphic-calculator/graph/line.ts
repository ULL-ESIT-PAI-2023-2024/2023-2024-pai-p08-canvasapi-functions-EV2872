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
 * @desc class that represents a line
 */

import { Coordinates } from '../utils/coordinates.js';

/**
 * @description class that represents a line
 */
export class Line {
  /**
   * @description receives the coordinates of the vertex of the line
   * @param leftVertex coordinates at the left vertex
   * @param rightVertex coordinate at the right vertex
   */
  constructor(private leftVertex: Coordinates, private rightVertex: Coordinates) {}

  /**
   * @description getter for the left vertex
   * @returns the left vertex
   */
  public getLeftVertex(): Coordinates { return this.leftVertex; }

  /**
   * @description getter for the right vertex
   * @returns the right vertex
   */
  public getRightVertex(): Coordinates { return this.rightVertex; }

  /**
   * @description getter for the position x of the left vertex
   * @returns the position x of the left vertex
   */
  public getLeftVertexX(): number { return this.leftVertex.getPositionX(); }

  /**
   * @description getter for the position y of the left vertex
   * @returns the position y of the left vertex
   */
  public getLeftVertexY(): number { return this.leftVertex.getPositionY(); }

  /**
   * @description getter for the position x of the right vertex
   * @returns the position x of the right vertex
   */
  public getRightVertexX(): number { return this.rightVertex.getPositionX(); }

  /**
   * @description getter for the position y of the right vertex
   * @returns the position y of the right vertex
   */
  public getRightVertexY(): number { return this.rightVertex.getPositionY(); }

  /**
   * @description calculates the middle point of the line
   * @returns the middle point of the line
   */
  public getMiddlePoint(): Coordinates {
    return new Coordinates(Math.floor((this.leftVertex.getPositionX() +
                                      this.rightVertex.getPositionX()) / 2), 
                          Math.floor((this.leftVertex.getPositionY() +
                                      this.rightVertex.getPositionY()) / 2));
  }
}