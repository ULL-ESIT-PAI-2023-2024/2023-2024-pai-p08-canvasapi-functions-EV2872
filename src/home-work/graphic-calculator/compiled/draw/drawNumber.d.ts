import { Draw } from "./draw.js";
import { CanvasWrapper } from "../canvas-wrapper/canvas-wrapper.js";
export declare class DrawNumber extends Draw {
    constructor(canvasWrapper: CanvasWrapper);
    drawObject(value: unknown, settings: unknown): void;
}
