import { Draw } from "./draw.js";
import { NumberSettings } from "../settings/numberSettings.js";
import { GridNumber } from "../graph/gridNumber.js";
export class DrawNumber extends Draw {
    constructor(canvasWrapper) { super(canvasWrapper); }
    drawObject(value, settings) {
        if (!(value instanceof GridNumber)) {
            throw new Error('This drawing methos just support lines');
        }
        if (!(settings instanceof NumberSettings)) {
            throw new Error('This drawing settings are not supported by lines');
        }
        let context = this.canvasWrapper.getContext();
        if (!context) {
            throw new Error('NULL context');
        }
        context.beginPath();
        context.font = `${settings.getPixelWidth()}px serif`;
        const POSITION = value.getCoordinates();
        context.strokeStyle = settings.getColor();
        context.fillText(`${value.getValue()}`, POSITION.getPositionX(), POSITION.getPositionY(), settings.getPixelWidth());
        console.log('Number has been draw');
    }
}
