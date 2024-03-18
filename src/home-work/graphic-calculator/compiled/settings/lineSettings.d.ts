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
 * @desc class that stores the line settings of a grid
 */
import { Settings } from './settings.js';
/**
 * @description class that stores the line settings of a grid
 */
export declare class LineSettings extends Settings {
    private dash;
    /**
     * @description receives the parameters used to draw lines
     * @param color of the line
     * @param pixelWidth thickness of the line
     * @param dash like discontinuity
     */
    constructor(color: string, pixelWidth: number, dash?: [number, number]);
    /**
     * @description getter for dash of the line
     * @returns the dash
     */
    getDash(): [number, number];
}
