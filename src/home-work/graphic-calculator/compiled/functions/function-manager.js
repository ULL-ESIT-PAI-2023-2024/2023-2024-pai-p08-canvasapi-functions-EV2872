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
 * @desc class that its functionality is create functions
 */
import { Pow } from './pow.js';
import { Sine } from './sine.js';
import { Sqrt } from './sqrt.js';
import { Tan } from './tan.js';
import { Factorial } from './factorial.js';
import { SineTaylor } from './sine-taylor.js';
/**
 * @description class that creates functions
 */
export class FunctionManager {
    /**
     * @description given a function name returns its respective object
     * @param functionName name of the function to create
     * @returns the function that matches the name
     */
    static getFunction(functionName) {
        functionName = functionName.toLowerCase();
        switch (functionName) {
            case 'pow':
                return new Pow();
            case 'sine':
                return new Sine();
            case 'sqrt':
                return new Sqrt();
            case 'tan':
                return new Tan();
            case 'fac':
                return new Factorial();
            case 'taylor':
                console.log('taylor');
                return new SineTaylor(14);
            default:
                throw new Error('Function not supported');
        }
    }
    /**
     * @description cannot instanciate this class
     */
    constructor() { }
}
