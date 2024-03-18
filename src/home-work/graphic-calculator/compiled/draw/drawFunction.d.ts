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
 * @desc class that its functionality is drawing functions
 */
import { Draw } from './draw.js';
import { Canvas } from '../utils/canvas.js';
/**
 * @description class that draws functions extending from Draw
 */
export declare class DrawFunction extends Draw {
    /**
     * @description receives the canvas
     * @param canvas the canvas
     */
    constructor(canvas: Canvas);
    /**
     * @description main function of the class that draws the math functions
     * @param myFunction function to be draw
     * @param settings let the method know how to draw
     */
    drawObject(mathFunction: unknown, settings: unknown): void;
    /**
     * @description connects the coordinates where the functon has been evaluated
     * @param mathFunction the function to evaluate in a range
     * @param settings contains the necessary to let the function know how to draw
     */
    private connectCoordinates;
}
