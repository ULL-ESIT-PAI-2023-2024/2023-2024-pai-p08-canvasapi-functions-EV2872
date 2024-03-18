export class DrawFunctionSettings {
    color;
    pixelWidth;
    range;
    constructor(color = 'Black', pixelWidth = 1, range) {
        this.color = color;
        this.pixelWidth = pixelWidth;
        this.range = range;
    }
    getColor() { return this.color; }
    getPixelWidth() { return this.pixelWidth; }
    getRange() { return this.range; }
}
