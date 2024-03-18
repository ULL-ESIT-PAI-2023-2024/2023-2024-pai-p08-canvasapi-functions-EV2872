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
 * @desc abstract class for child functions
 */

import { Coordinates } from '../utils/coordinates.js';
import { Range } from './range.js'

/**
 * @description abstract class for child functions
 */
export abstract class Function {
  /**
   * @description asbtract function that delegates in the child class
   *              how to evaluate a point
   * @param point where to evaluate
   * @param scale multiples the result to match the graph size
   */
  public abstract evaluateInAPoint(point: number, scale: number): Coordinates;

  /**
   * @description evaluates the function in a given range
   * @param range where to evaluate the function
   * @param scale multiples the result to match the graph size
   * @param smoothRatio to make the line of the function smoother for the eye
   * @returns a vector with all the results
   */
  public evaluateInRange(range: Range, scale: number, smoothRatio: number): Coordinates[] {
    let result: Coordinates[] = [];
    const SUPERIOR_LIMIT: number = range.getSuperiorLimit();
    for (let index = range.getInferiorLimit(); index < SUPERIOR_LIMIT; index += smoothRatio) {
      if (!this.isPossibleDivisor(index)) {};
      const COORDINATES: Coordinates = this.evaluateInAPoint(index, scale);
      result.push(COORDINATES);      
    }
    return result;
  }

  /**
   * @description used to avoid possible errors with division by 0
   * @param divisor value to be checked
   * @returns true if different of zero
   */
  private isPossibleDivisor(divisor: number): boolean {
    return divisor !== 0;
  }
}