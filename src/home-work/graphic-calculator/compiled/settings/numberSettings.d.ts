import { Settings } from "./settings.js";
export declare class NumberSettings extends Settings {
    private size;
    constructor(color: string, pixelWidth?: number, size?: number);
    getSize(): number;
}
