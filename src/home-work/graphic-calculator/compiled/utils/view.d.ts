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
import { Graph } from '../graph/graph.js';
/**
 * @description class that decides wich function will be shown
 */
export declare class View {
    private graph;
    /**
     * @description receives the graph where the functions will be visualzied
     * @param graph graph where the functions are draw
     */
    constructor(graph: Graph);
    /**
     * @description method that receives a function and draws it in the graph
     * @param myFunction function to be draw
     */
    visualizeFunction(myFunction: string, scale?: number): void;
}
