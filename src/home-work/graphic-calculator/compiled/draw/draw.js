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
 * @desc astract class that draws a object
 */
/**
 * @description parent class for every drawing class
 */
export class Draw {
    canvas;
    /**
     * @description receives the canvas to be draw
     * @param canvas the canvas
     */
    constructor(canvas) {
        this.canvas = canvas;
    }
    /**
     * @description getter for the canvas
     * @returns the canvas
     */
    getCanvas() { return this.canvas; }
    /**
     * @description wrapper around the context function moveTo
     * @param coordinates where to move
     */
    moveTo(coordinates) {
        let context = this.canvas.getContext();
        if (!context)
            throw new Error('NULL context');
        context.moveTo(coordinates.getPositionX(), coordinates.getPositionY());
    }
}
