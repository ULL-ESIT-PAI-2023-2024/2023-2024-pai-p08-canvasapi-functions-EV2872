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
 * @desc class that draws the axis lines of the grid used by the graph
 */
import { DrawLine } from './drawLine.js';
import { Grid } from '../graph/grid.js';
import { LineSettings } from '../settings/lineSettings.js';
/**
 * @description class that draws the axis of a graph given a grid
 */
export declare class DrawGridAxis {
    private grid;
    /**
     * @description default so we dont see dashing on the asix
     */
    private dash;
    /**
     * @description to adjust the thickness
     */
    private pixelWidth;
    /**
     * @description receives the grid where the axis will be draw
     * @param grid needed to adjust the axis in the middle
     */
    constructor(grid: Grid);
    /**
     * @description draws both asix
     * @param drawLine object that draws lines given the settings
     * @param settings tells the draw line object how to draw
     */
    drawBothAxis(drawLine: DrawLine, settings: LineSettings): void;
    /**
     * @description draws the axis x
     * @param drawLine object that draws lines given the settings
     * @param settings tells the draw line object how to draw
     */
    private drawAxisX;
    /**
     * @description draws the axis y
     * @param drawLine object that draws lines given the settings
     * @param settings tells the draw line object how to draw
     */
    private drawAxisY;
}
