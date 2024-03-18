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
 * @desc class that stores the function settings
 */
import { Settings } from './settings.js';
/**
 * @description class that stores the function settings
 */
export class FunctionSettings extends Settings {
    range;
    scale;
    smoothRatio;
    /**
     * @description receives the parameters that the drawing class needs
     * @param color of the function
     * @param pixelWidth to make it thicker
     * @param scale to match the graph size
     * @param smoothRatio to make the function smoother for the eye
     */
    constructor(color, pixelWidth, range, scale = 1, smoothRatio = 0.1) {
        super(color, pixelWidth);
        this.range = range;
        this.scale = scale;
        this.smoothRatio = smoothRatio;
    }
    /**
     * @description getter for the range
     * @returns the range of the function
     */
    getRange() { return this.range; }
    /**
     * @description getter for the scale
     * @returns the scale of the function
     */
    getScale() { return this.scale; }
    /**
     * @description getter for the smooth ratio
     * @returns the smooth ratio of the function
     */
    getSmoothRatio() { return this.smoothRatio; }
}
