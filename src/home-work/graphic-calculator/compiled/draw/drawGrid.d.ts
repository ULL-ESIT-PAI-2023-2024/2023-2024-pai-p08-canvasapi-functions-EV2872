/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 * @copyright Copyright © 2007 Free Software Foundation, Inc. <https://fsf.org/>
 *            Everyone is permitted to copy and distribute verbatim copies of
 *            this license document, but changing it is not allowed.
 * @author Evian Concepción Peña
 * @since March 3 2024
 * @desc class that its functionality is drawing the grid of the graph
 */
import { Draw } from './draw.js';
import { Canvas } from '../utils/canvas.js';
/**
 * @description class that draws the grid of the math graph
 */
export declare class DrawGrid extends Draw {
    /**
     * @description receives the canvas
     * @param canvas the canvas
     */
    constructor(canvas: Canvas);
    /**
     * @description draws the grid
     * @param grid to be draw
     * @param settings knows how the method must draw
     */
    drawObject(grid: unknown, settings: unknown): void;
}
