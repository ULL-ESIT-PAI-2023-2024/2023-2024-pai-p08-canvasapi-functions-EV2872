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
 * @desc class that decides whcih function will be shown
 */
import { FunctionManager } from './functions/function-manager.js';
import { Range } from './functions/range.js';
import { FunctionSettings } from './settings/functionSettings.js';
/**
 * @description class that decides wich function will be shown
 */
export class View {
    graph;
    /**
     * @description receives the graph where the functions will be visualzied
     * @param graph graph where the functions are draw
     */
    constructor(graph) {
        this.graph = graph;
    }
    /**
     * @description method that receives a function and draws it in the graph
     * @param myFunction function to be draw
     */
    visualizeFunction(myFunction) {
        const FUNCTION = FunctionManager.getFunction(myFunction);
        const COLOR = 'Black';
        const PIXEL_WITDH = 3;
        const GRAPH_SETTINGS = this.graph.getGraphSettings();
        const RANGE = new Range(-GRAPH_SETTINGS.getCanvas().getWidth(), GRAPH_SETTINGS.getCanvas().getWidth());
        const SCALE = 50;
        const SMOOTH_RATIO = 0.01;
        const FUNCTION_SETTINGS = new FunctionSettings(COLOR, PIXEL_WITDH, RANGE, SCALE, SMOOTH_RATIO);
        this.graph.drawFunction(FUNCTION, FUNCTION_SETTINGS);
    }
}
