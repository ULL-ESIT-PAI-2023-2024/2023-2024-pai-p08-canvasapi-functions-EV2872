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
import { Function } from '../functions/function.js';
import { FunctionManager } from '../functions/function-manager.js';
import { Range } from '../functions/range.js';
import { GridNumericSettings } from '../settings/gridNumericSettings.js';
import { FunctionSettings } from '../settings/functionSettings.js';

/**
 * @description class that decides wich function will be shown
 */
export class View {
  /**
   * @description receives the graph where the functions will be visualzied
   * @param graph graph where the functions are draw
   */
  constructor(private graph: Graph) {}

  /**
   * @description method that receives a function and draws it in the graph
   * @param myFunction function to be draw
   */
  public visualizeFunction(myFunction: string, scale: number = 50): void {
    const FUNCTION: Function = FunctionManager.getFunction(myFunction);
    const COLOR: string = 'Black';
    const PIXEL_WITDH: number = 3;
    const GRAPH_SETTINGS: GridNumericSettings = this.graph.getGraphSettings();
    const RANGE = new Range(-GRAPH_SETTINGS.getCanvas().getWidth(), 
                          GRAPH_SETTINGS.getCanvas().getWidth());
    const SMOOTH_RATIO: number = 0.01;
    const FUNCTION_SETTINGS = 
            new FunctionSettings(COLOR, PIXEL_WITDH, RANGE, scale, SMOOTH_RATIO);
    this.graph.drawFunction(FUNCTION, FUNCTION_SETTINGS);
  }
}