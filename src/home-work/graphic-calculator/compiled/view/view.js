import { FunctionManager } from "../functions/function-manager.js";
import { Range } from "../functions/range.js";
import { FunctionSettings } from "../settings/functionSettings.js";
export class View {
    graph;
    constructor(graph) {
        this.graph = graph;
    }
    visualizeFunction(myFunction) {
        const FUNCTION = FunctionManager.getFunction(myFunction);
        const COLOR = 'Black';
        const PIXEL_WITDH = 3;
        const GRAPH_SETTINGS = this.graph.getGraphSettings();
        const RANGE = new Range(-GRAPH_SETTINGS.getCanvasWrapper().getWidth(), GRAPH_SETTINGS.getCanvasWrapper().getWidth());
        const SCALE = 50;
        const SMOOTH_RATIO = 0.1;
        const FUNCTION_SETTINGS = new FunctionSettings(COLOR, PIXEL_WITDH, RANGE, SCALE, SMOOTH_RATIO);
        this.graph.drawFunction(FUNCTION, FUNCTION_SETTINGS);
    }
}
