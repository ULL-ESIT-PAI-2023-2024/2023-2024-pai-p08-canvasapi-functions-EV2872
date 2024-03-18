import { DrawLine } from './drawLine.js';
import { Grid } from '../graph/grid.js';
import { LineSettings } from '../settings/lineSettings.js';
/**
 * @description auxiliar class to make the drawGrid class smaller
 */
export declare class DrawGridAxis {
    private grid;
    private dash;
    private pixelWidth;
    constructor(grid: Grid);
    private drawAxisX;
    private drawAxisY;
    drawBothAxis(drawLine: DrawLine, settings: LineSettings): void;
}
