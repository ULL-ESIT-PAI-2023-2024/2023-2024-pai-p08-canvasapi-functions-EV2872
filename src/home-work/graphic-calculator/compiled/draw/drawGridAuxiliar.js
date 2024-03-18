import { LineSettings } from '../settings/lineSettings.js';
/**
 * @description auxiliar class to make the drawGrid class smaller
 */
export class DrawGridAxis {
    grid;
    dash = [1, 0];
    pixelWidth = 5;
    constructor(grid) {
        this.grid = grid;
    }
    drawAxisX(drawLine, settings) {
        const SETTINGS_AXIS = new LineSettings(settings.getColor(), this.pixelWidth, this.dash);
        const MIDDLE_VERTICAL_LINE = this.grid.getMiddleAxisY();
        drawLine.drawObject(MIDDLE_VERTICAL_LINE, SETTINGS_AXIS);
        const MIDDLE_HORIZONTAL_LINE = this.grid.getMiddleAxisX();
        drawLine.drawObject(MIDDLE_HORIZONTAL_LINE, SETTINGS_AXIS);
    }
    drawAxisY(drawLine, settings) {
        const DASH = [1, 0];
        const PIXEL_WIDTH = 5;
        const SETTINGS_AXIS = new LineSettings(settings.getColor(), PIXEL_WIDTH, DASH);
        const MIDDLE_VERTICAL_LINE = this.grid.getMiddleAxisY();
        drawLine.drawObject(MIDDLE_VERTICAL_LINE, SETTINGS_AXIS);
        const MIDDLE_HORIZONTAL_LINE = this.grid.getMiddleAxisX();
        drawLine.drawObject(MIDDLE_HORIZONTAL_LINE, SETTINGS_AXIS);
    }
    drawBothAxis(drawLine, settings) {
        this.drawAxisX(drawLine, settings);
        this.drawAxisY(drawLine, settings);
    }
}
