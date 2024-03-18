import { Settings } from "./settings.js";
export class NumberSettings extends Settings {
    size;
    constructor(color, pixelWidth = 1, size = 10) {
        super(color, pixelWidth);
        this.size = size;
    }
    getSize() { return this.size; }
}
