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
 * @desc class that draws the numbers in the axis to know the values in the graph
 */
import { Grid } from '../graph/grid.js';
/**
 * @description class that draws the numbers on the axis of a graph given a grid
 */
export declare class DrawGridAxisNumbers {
    private grid;
    /**
     * @description receives the grid of the graph where the numbers will be placed
     * @param grid area of a graph where the functions will be visualized
     */
    constructor(grid: Grid);
    /**
     * @description draws every number in the axis x and y to let the user know
     *              the value of x and y
     */
    drawNumberOnBothAxis(): void;
    /**
     * @description draws the number on the axis x
     * @param context of the canvas
     */
    private drawNumberOnAxisX;
    /**
     * @description draws the number on the axis y
     * @param context of the canvas
     */
    private drawNumberOnAxisY;
    /**
     * @description gives the style to the numbers
     * @param context of the canvas
     */
    private defaultNumberSettings;
}
