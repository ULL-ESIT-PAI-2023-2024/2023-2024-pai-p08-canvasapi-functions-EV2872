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
 * @desc class that represents f(x) = x!
 */

import { Coordinates } from '../utils/coordinates.js';
import { Function } from './function.js';

/**
 * @description class that represents f(x) = x!
 */
export class Factorial extends Function {
  /**
   * @description given a value for x calculates f(x) = x!
   * @param point where to evaluate
   * @param scale to match the graph size
   * @returns the result scaled
   */
  public evaluateInAPoint(point: number, scale: number): Coordinates {
    if (point < 0) return new Coordinates(0, 0);
    if (point > 10) return new Coordinates(0, 0);
    let y = 1;
    point = Math.floor(point)
    for (let index = 1; index < point; index += 1) {
        y *= index;
    }
    console.log(y)
    return new Coordinates(point * scale, y * scale);
  }
}