import { Coordinates } from "../coordinates.js";
import { CanvasWrapper } from "../canvas-wrapper/canvas-wrapper.js";
export declare class GridSettings {
    private origin;
    private distanceBetweenLines;
    private canvasWrapper;
    constructor(origin: Coordinates, distanceBetweenLines: number, canvasWrapper: CanvasWrapper);
    getOrigin(): Coordinates;
    getLineSeparation(): number;
    getCanvasWrapper(): CanvasWrapper;
}
