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
 * @desc class that represents f(x) = sqrt(x)
 */
import { Coordinates } from '../utils/coordinates.js';
import { Function } from './function.js';
/**
 * @description class that represents f(x) = sqrt(x)
 */
export declare class Sqrt extends Function {
    /**
     * @description given a value for x calculates f(x) = sqrt(x)
     * @param point where to evaluate
     * @param scale to match the graph size
     * @returns the result scaled
     */
    evaluateInAPoint(point: number, scale: number): Coordinates;
}
