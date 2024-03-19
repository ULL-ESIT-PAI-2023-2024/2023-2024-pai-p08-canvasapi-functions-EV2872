"use strict";
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
 * @desc class that represents the president from USA
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.President = void 0;
/**
 * @description class tha represenst the president which is Biden
 */
var President = /** @class */ (function () {
    /**
     * @description only one president can exist
     */
    function President() {
        /**
         * @description name of the pressident
         */
        this.name = 'Biden';
    }
    /**
     * @description getter for the pressident, if there is already one president
     *              it returns thta one because we can´t have two
     * @returns the current president
     */
    President.getPresident = function () {
        if (!President.instance) {
            President.instance = new President();
        }
        return President.instance;
    };
    /**
     * @description getter for the name of the president
     */
    President.prototype.getName = function () { return this.name; };
    return President;
}());
exports.President = President;
