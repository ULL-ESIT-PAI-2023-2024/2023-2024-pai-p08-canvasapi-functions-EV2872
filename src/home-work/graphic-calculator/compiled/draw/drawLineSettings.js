export class DrawLineSettings {
    color;
    pixelWidth;
    dash;
    constructor(color = 'Black', pixelWidth = 1, dash = [1, 0]) {
        this.color = color;
        this.pixelWidth = pixelWidth;
        this.dash = dash;
    }
    getColor() { return this.color; }
    getPixelWidth() { return this.pixelWidth; }
    getDash() { return this.dash; }
}
