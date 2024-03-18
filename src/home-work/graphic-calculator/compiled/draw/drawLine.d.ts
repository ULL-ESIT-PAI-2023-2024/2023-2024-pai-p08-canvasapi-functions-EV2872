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
 * @desc class that its functionality is drawing lines
 */
import { Draw } from './draw.js';
import { Canvas } from '../utils/canvas.js';
/**
 * @description class that draws lines
 */
export declare class DrawLine extends Draw {
    /**
     * @description receives the canvas
     * @param canvas the canvas
     */
    constructor(canvas: Canvas);
    /**
     * @description method that draws a line
     * @param line object that contains the line coordinates
     * @param settings tells the method the drawing style
     */
    drawObject(line: unknown, settings: unknown): void;
}
