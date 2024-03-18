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
 * @desc class that represents a math graph and can deply many functions
 *       at the same time
 */
import { Grid } from './grid.js';
import { Function } from '../functions/function.js';
import { FunctionSettings } from '../settings/functionSettings.js';
import { LineSettings } from '../settings/lineSettings.js';
import { GridNumericSettings } from '../settings/gridNumericSettings.js';
/**
 * @description represents a math graph using position (x, y)
 */
export declare class Graph {
    private grid;
    private drawLineSettings;
    /**
     * @description stores the grid and the settings that will draw the grid
     * @param grid area where the function will be draw
     * @param drawLineSettings style used to draw the grid lines
     */
    constructor(grid: Grid, drawLineSettings: LineSettings);
    /**
     * @description gettern from graph settings
     * @returns graph settings
     */
    getGraphSettings(): GridNumericSettings;
    /**
     * @description draws the given function in the canvas used by the graph
     * @param myFunction function to be draw
     * @param functionSettings has the parameters to draw the function
     */
    drawFunction(myFunction: Function, functionSettings: FunctionSettings): void;
    /**
     * @description draws the grid using the line settings
     */
    private drawGrid;
}
