export declare class LineSettings {
    private color;
    private pixelWidth;
    private dash;
    constructor(color?: string, pixelWidth?: number, dash?: [number, number]);
    getColor(): string;
    getPixelWidth(): number;
    getDash(): [number, number];
}
