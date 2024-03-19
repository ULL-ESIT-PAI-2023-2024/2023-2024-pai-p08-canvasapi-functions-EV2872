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
 * @desc class that represents f(x) = sin(x) = x + (x³/3!) + (x⁵/5!)
 */
import { Coordinates } from '../utils/coordinates.js';
import { Function } from './function.js';
/**
 * @description class that represents f(x) = sin(x) = x + (x³/3!) + (x⁵/5!)
 */
export declare class SineTaylor extends Function {
    private grade;
    /**
     * @description receives a value that works as limit of the approximation
     * @param grade maximun grade to calculate
     */
    constructor(grade: number);
    /**
     * @description given a value for x calculates f(x) = sin(x) = x + (x³/3!) + (x⁵/5!)
     * @param point where to evaluate
     * @param scale to match the graph size
     * @returns the result scaled
     */
    evaluateInAPoint(point: number, scale: number): Coordinates;
    /**
     * @description calculates the factorial of a positive integer
     * @param value positive integer
     * @returns the result
     */
    private factorial;
}
