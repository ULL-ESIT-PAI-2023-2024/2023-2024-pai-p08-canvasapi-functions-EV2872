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
 * @desc class that stores the numeric settings of a grid like
 *       the origin, line separator...
 */
import { Coordinates } from '../utils/coordinates.js';
import { Canvas } from '../utils/canvas.js';
/**
 * @description class that stores the numeric settings of a grid like
 *       the origin, line separator...
 */
export declare class GridNumericSettings {
    private origin;
    private distanceBetweenLines;
    private canvas;
    /**
     * @description stores the origin, line separation and canvas
     * @param origin coordinates of the grid
     * @param distanceBetweenLines value that set a separation
     *                             between lines
     * @param canvas the canvas
     */
    constructor(origin: Coordinates, distanceBetweenLines: number, canvas: Canvas);
    /**
     * @description getter for the origin coordinates
     * @returns the origin
     */
    getOrigin(): Coordinates;
    /**
     * @description getter for the line separator
     * @returns the value of the line separation
     */
    getLineSeparation(): number;
    /**
     * @description getter for the canvas
     * @returns the canvas wrapped
     */
    getCanvas(): Canvas;
}
