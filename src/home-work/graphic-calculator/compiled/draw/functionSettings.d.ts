export declare class FunctionSettings {
    private color;
    private pixelWidth;
    private range;
    constructor(color: string, pixelWidth: number, range: [number, number]);
    getColor(): string;
    getPixelWidth(): number;
    getRange(): [number, number];
}
