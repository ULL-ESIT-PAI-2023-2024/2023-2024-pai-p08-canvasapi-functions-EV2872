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
 * @desc driver function
 */
import { View } from './utils/view.js';
import { Graph } from './graph/graph.js';
import { Canvas } from './utils/canvas.js';
import { Grid } from './graph/grid.js';
import { GridNumericSettings } from './settings/gridNumericSettings.js';
import { Coordinates } from './utils/coordinates.js';
import { LineSettings } from './settings/lineSettings.js';
/**
 * @description driver function of the client
 */
function main() {
    const CANVAS = new Canvas();
    const LINE_SEPARATOR = 50;
    const ORIGIN = new Coordinates(0, 0);
    const GRID_SETTINGS = new GridNumericSettings(ORIGIN, LINE_SEPARATOR, CANVAS);
    const GRID = new Grid(GRID_SETTINGS);
    const DASH = [10, 1];
    const LINE_SETTINGS = new LineSettings('Black', 1, DASH);
    const GRAPH = new Graph(GRID, LINE_SETTINGS);
    const VIEW = new View(GRAPH);
    const FUNCTION_NAMW = prompt('Introudce the function name:') ?? '';
    VIEW.visualizeFunction(FUNCTION_NAMW, LINE_SEPARATOR);
}
main();
