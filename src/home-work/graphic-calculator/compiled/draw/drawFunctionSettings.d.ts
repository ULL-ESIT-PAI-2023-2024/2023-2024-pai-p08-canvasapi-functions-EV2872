export declare class DrawFunctionSettings {
    private color;
    private pixelWidth;
    private range;
    constructor(color: string, pixelWidth: number, range: [number, number]);
    getColor(): string;
    getPixelWidth(): number;
    getRange(): [number, number];
}
