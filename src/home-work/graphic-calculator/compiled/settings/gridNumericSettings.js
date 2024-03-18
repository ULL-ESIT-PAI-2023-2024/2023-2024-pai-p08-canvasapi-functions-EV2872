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
/**
 * @description class that stores the numeric settings of a grid like
 *       the origin, line separator...
 */
export class GridNumericSettings {
    origin;
    distanceBetweenLines;
    canvas;
    /**
     * @description stores the origin, line separation and canvas
     * @param origin coordinates of the grid
     * @param distanceBetweenLines value that set a separation
     *                             between lines
     * @param canvas the canvas
     */
    constructor(origin, distanceBetweenLines, canvas) {
        this.origin = origin;
        this.distanceBetweenLines = distanceBetweenLines;
        this.canvas = canvas;
    }
    /**
     * @description getter for the origin coordinates
     * @returns the origin
     */
    getOrigin() { return this.origin; }
    /**
     * @description getter for the line separator
     * @returns the value of the line separation
     */
    getLineSeparation() { return this.distanceBetweenLines; }
    /**
     * @description getter for the canvas
     * @returns the canvas wrapped
     */
    getCanvas() { return this.canvas; }
}
