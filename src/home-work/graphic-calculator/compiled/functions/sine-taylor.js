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
export class SineTaylor extends Function {
    grade;
    /**
     * @description receives a value that works as limit of the approximation
     * @param grade maximun grade to calculate
     */
    constructor(grade) {
        super();
        this.grade = grade;
    }
    /**
     * @description given a value for x calculates f(x) = sin(x) = x + (x³/3!) + (x⁵/5!)
     * @param point where to evaluate
     * @param scale to match the graph size
     * @returns the result scaled
     */
    evaluateInAPoint(point, scale) {
        let result = 0;
        let signFlag = false;
        for (let index = 0; index <= this.grade; index++) {
            if (index % 2 === 0)
                continue;
            if (signFlag) {
                result -= Math.pow(point, index) / this.factorial(index);
                signFlag = false;
            }
            else {
                result += Math.pow(point, index) / this.factorial(index);
                signFlag = true;
            }
        }
        return new Coordinates(point * scale, result * scale);
    }
    /**
     * @description calculates the factorial of a positive integer
     * @param value positive integer
     * @returns the result
     */
    factorial(value) {
        if (value === 0)
            return 0;
        if (value === 1)
            return 1;
        let result = 1;
        for (let index = 2; index <= value; index++) {
            result *= index;
        }
        return result;
    }
}
