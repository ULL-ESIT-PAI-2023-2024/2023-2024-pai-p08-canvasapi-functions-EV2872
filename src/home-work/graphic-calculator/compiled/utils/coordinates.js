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
 * @desc class that stores de coordinates of a dot
 */
/**
 * @description pair that stores a position x and y in a graph (for u a canvas)
 */
export class Coordinates {
    positionX;
    positionY;
    /**
     * @description constructor that receives two positions
     * @param positionX position x in a graph, in this case a canvas
     * @param positionY position y in a graph, in this case a canvas
     */
    constructor(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
    }
    /**
     * @description getter for the position x
     * @returns the position x
     */
    getPositionX() { return this.positionX; }
    /**
     * @description getter for the position y
     * @returns the position y
     */
    getPositionY() { return this.positionY; }
}
