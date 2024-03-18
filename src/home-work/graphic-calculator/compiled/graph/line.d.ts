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
export declare class Line {
    private leftVertex;
    private rightVertex;
    /**
     * @description receives the coordinates of the vertex of the line
     * @param leftVertex coordinates at the left vertex
     * @param rightVertex coordinate at the right vertex
     */
    constructor(leftVertex: Coordinates, rightVertex: Coordinates);
    /**
     * @description getter for the left vertex
     * @returns the left vertex
     */
    getLeftVertex(): Coordinates;
    /**
     * @description getter for the right vertex
     * @returns the right vertex
     */
    getRightVertex(): Coordinates;
    /**
     * @description getter for the position x of the left vertex
     * @returns the position x of the left vertex
     */
    getLeftVertexX(): number;
    /**
     * @description getter for the position y of the left vertex
     * @returns the position y of the left vertex
     */
    getLeftVertexY(): number;
    /**
     * @description getter for the position x of the right vertex
     * @returns the position x of the right vertex
     */
    getRightVertexX(): number;
    /**
     * @description getter for the position y of the right vertex
     * @returns the position y of the right vertex
     */
    getRightVertexY(): number;
    /**
     * @description calculates the middle point of the line
     * @returns the middle point of the line
     */
    getMiddlePoint(): Coordinates;
}
