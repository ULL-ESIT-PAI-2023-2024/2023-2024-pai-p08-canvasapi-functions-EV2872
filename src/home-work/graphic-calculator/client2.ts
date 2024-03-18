// THIS CLIENT IS JUST FOR ME

import { Coordinates } from "./utils/coordinates.js";
import { Canvas } from "./utils/canvas.js";
import { Grid } from "./graph/grid.js";
import { LineSettings } from "./settings/lineSettings.js";
import { FunctionSettings } from "./settings/functionSettings.js"
import { Function } from "./functions/function.js"
import { Pow } from "./functions/pow.js"
import { Sine } from "./functions/sine.js"
import { Sqrt } from "./functions/sqrt.js"
import { Graph } from "./graph/graph.js"
import { GridNumericSettings } from "./settings/gridNumericSettings.js";
import { Range } from "./functions/range.js";

function main() {
  const CANVAS_WRAPPER = new Canvas();
  const GRID_SETTINGS = new GridNumericSettings(new Coordinates(0, 0), 50, CANVAS_WRAPPER);
  const GRID = new Grid(GRID_SETTINGS);
  const LINE_SETTINGS = new LineSettings("Black", 1, [2, 1]);
  const GRAPH = new Graph(GRID, LINE_SETTINGS);

  let range = new Range(-40, 40);
  let SETTINGS2 = new FunctionSettings("Black", 3, range, 20, 0.1);
  let FUNCTION: Function = new Pow();
  GRAPH.drawFunction(FUNCTION, SETTINGS2);

  range = new Range(-500, 500);
  SETTINGS2 = new FunctionSettings("Red", 3, range, 10, 0.1);
  FUNCTION = new Sine();
  GRAPH.drawFunction(FUNCTION, SETTINGS2);

  range = new Range(0, 500);
  SETTINGS2 = new FunctionSettings("Blue", 3, range, 10, 0.1);
  FUNCTION = new Sqrt();
  GRAPH.drawFunction(FUNCTION, SETTINGS2);
}

main()