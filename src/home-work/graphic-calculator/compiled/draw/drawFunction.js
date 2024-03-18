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
 * @desc class that its functionality is drawing functions
 */
import { Draw } from './draw.js';
import { FunctionSettings } from '../settings/functionSettings.js';
import { Function } from '../functions/function.js';
/**
 * @description class that draws functions extending from Draw
 */
export class DrawFunction extends Draw {
    /**
     * @description receives the canvas
     * @param canvas the canvas
     */
    constructor(canvas) {
        super(canvas);
    }
    /**
     * @description main function of the class that draws the math functions
     * @param myFunction function to be draw
     * @param settings let the method know how to draw
     */
    drawObject(mathFunction, settings) {
        if (!(mathFunction instanceof Function)) {
            throw new Error('This drawing methos just support functions');
        }
        if (!(settings instanceof FunctionSettings)) {
            throw new Error('This drawing settings are not supported by functions');
        }
        this.connectCoordinates(mathFunction, settings);
    }
    /**
     * @description connects the coordinates where the functon has been evaluated
     * @param mathFunction the function to evaluate in a range
     * @param settings contains the necessary to let the function know how to draw
     */
    connectCoordinates(mathFunction, settings) {
        let context = this.canvas.getContext();
        if (!context)
            throw new Error('NULL context');
        const RANGE = settings.getRange();
        const POINTS_EVALUATED = mathFunction.evaluateInRange(RANGE, settings.getScale(), settings.getSmoothRatio());
        if (POINTS_EVALUATED.length === 0) {
            console.log('No coordinates to draw');
        }
        context.beginPath();
        const FIRST_POINT = POINTS_EVALUATED[0];
        this.moveTo(FIRST_POINT);
        context.strokeStyle = settings.getColor();
        context.lineWidth = settings.getPixelWidth();
        for (const COORDINATES of POINTS_EVALUATED) {
            context.lineTo(COORDINATES.getPositionX(), COORDINATES.getPositionY());
        }
        context.stroke();
        context.closePath();
    }
}
