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
import { Function } from './function.js';
/**
 * @description class that creates functions
 */
export declare class FunctionManager {
    /**
     * @description given a function name returns its respective object
     * @param functionName name of the function to create
     * @returns the function that matches the name
     */
    static getFunction(functionName: string): Function;
    /**
     * @description cannot instanciate this class
     */
    private constructor();
}
