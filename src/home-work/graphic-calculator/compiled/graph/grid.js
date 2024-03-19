/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @copyright Copyright © 2007 Free Software Foundation, Inc. <https://fsf.org/>
 *            Everyone is permitted to copy and distribute verbatim copies of
 *            this license document, but changing it is not allowed.
 * @author Evian Concepción Peña
 * @since March 3 2024
 * @desc class that represents the visible area of the graph
 */
import { Coordinates } from '../utils/coordinates.js';
import { Line } from './line.js';
import { GridHorizontalLines } from './gridHorizontalLines.js';
import { GridVerticalLines } from './gridVerticalLines.js';
/**
 * @description class that represents the visible area of the graph
 */
export class Grid {
    gridSettings;
    /**
     * @description receives the settings used for the grid
     * @param gridSettings settings that store numeric properties
     */
    constructor(gridSettings) {
        this.gridSettings = gridSettings;
        this.setOriginToZeroZero();
    }
    /**
     * @description getter for the settings
     * @returns the settings
     */
    getSettings() { return this.gridSettings; }
    /**
     * @description getter for the origin coordinates
     * @returns the origin coordinates
     */
    getOrigin() { return this.gridSettings.getOrigin(); }
    /**
     * @description getter for the line separator
     * @returns the line separtor
     */
    getDistanceBetweenLines() { return this.gridSettings.getLineSeparation(); }
    /**
     * @description calculates the position of the lines using the line separator and origin
     * @returns a vector of lines
     */
    calculateLinePositions() {
        const HORIZONTAL_LINES2 = new GridHorizontalLines(this.getSettings());
        const VERTICAL_LINES2 = new GridVerticalLines(this.getSettings());
        let result2 = HORIZONTAL_LINES2.calculateHorizontalLines();
        result2 = result2.concat(VERTICAL_LINES2.calculateVerticalLines());
        return result2;
    }
    /**
     * @description calculates the middle axis for horizontal lines
     * @returns the middle axis
     */
    getMiddleAxisX() {
        const CANVAS = this.gridSettings.getCanvas();
        const LEFT_VERTEX = new Coordinates(-CANVAS.getWidth() / 2, 0);
        const RIGHT_VERTEX = new Coordinates(+CANVAS.getWidth() / 2, 0);
        return new Line(LEFT_VERTEX, RIGHT_VERTEX);
    }
    /**
     * @description calculates the middle axis for vertical lines
     * @returns the middle axis
     */
    getMiddleAxisY() {
        const CANVAS = this.gridSettings.getCanvas();
        const LEFT_VERTEX = new Coordinates(0, -CANVAS.getHeight() / 2);
        const RIGHT_VERTEX = new Coordinates(0, +CANVAS.getHeight() / 2);
        return new Line(LEFT_VERTEX, RIGHT_VERTEX);
    }
    /**
     * @description sets the origin of the canvas in the middle of it
     * @param canvas the canvas
     */
    setOriginToZeroZero() {
        const CANVAS = this.gridSettings.getCanvas();
        let context = CANVAS.getContext();
        if (!context)
            throw new Error('Null Contex');
        context.save();
        const PREVIOUS_ORIGIN = new Coordinates(CANVAS.getWidth() / 2, CANVAS.getHeight() / 2);
        context.translate(PREVIOUS_ORIGIN.getPositionX(), PREVIOUS_ORIGIN.getPositionY());
        context.scale(1, -1);
    }
}
