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
 * @desc class that represents the visible area of the graph
 */
import { Coordinates } from '../utils/coordinates.js';
import { Line } from './line.js';
import { GridNumericSettings } from '../settings/gridNumericSettings.js';
/**
 * @description class that represents the visible area of the graph
 */
export declare class Grid {
    private gridSettings;
    /**
     * @description receives the settings used for the grid
     * @param gridSettings settings that store numeric properties
     */
    constructor(gridSettings: GridNumericSettings);
    /**
     * @description getter for the settings
     * @returns the settings
     */
    getSettings(): GridNumericSettings;
    /**
     * @description getter for the origin coordinates
     * @returns the origin coordinates
     */
    getOrigin(): Coordinates;
    /**
     * @description getter for the line separator
     * @returns the line separtor
     */
    getDistanceBetweenLines(): number;
    /**
     * @description calculates the position of the lines using the line separator and origin
     * @returns a vector of lines
     */
    calculateLinePositions(): Line[];
    /**
     * @description calculates the middle axis for horizontal lines
     * @returns the middle axis
     */
    getMiddleAxisX(): Line;
    /**
     * @description calculates the middle axis for vertical lines
     * @returns the middle axis
     */
    getMiddleAxisY(): Line;
    /**
     * @description sets the origin of the canvas in the middle of it
     * @param canvas the canvas
     */
    private setOriginToZeroZero;
}
