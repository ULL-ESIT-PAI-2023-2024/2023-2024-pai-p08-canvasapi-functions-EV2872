export class GridSettings {
    origin;
    distanceBetweenLines;
    canvasWrapper;
    constructor(origin, distanceBetweenLines, canvasWrapper) {
        this.origin = origin;
        this.distanceBetweenLines = distanceBetweenLines;
        this.canvasWrapper = canvasWrapper;
    }
    getOrigin() { return this.origin; }
    getLineSeparation() { return this.distanceBetweenLines; }
    getCanvasWrapper() { return this.canvasWrapper; }
}
