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
 * @desc class that represents a numeric range given inferior/superior limits
 */
/**
 * @description class that represents a numeric range
 */
export class Range {
    inferiorLimit;
    superiorLimit;
    /**
     * @description receives two values that will be the limits
     * @param inferiorLimit minimun value for f(x)
     * @param superiorLimit maximun value for f(x)
     */
    constructor(inferiorLimit, superiorLimit) {
        this.inferiorLimit = inferiorLimit;
        this.superiorLimit = superiorLimit;
        if (this.superiorLimit < this.inferiorLimit) {
            throw new Error('Invalid range');
        }
    }
    /**
     * @description getter for the inferior limit
     * @returns the inferior limit
     */
    getInferiorLimit() { return this.inferiorLimit; }
    /**
     * @description getter for the superior limit
     * @returns the superior limit
     */
    getSuperiorLimit() { return this.superiorLimit; }
}