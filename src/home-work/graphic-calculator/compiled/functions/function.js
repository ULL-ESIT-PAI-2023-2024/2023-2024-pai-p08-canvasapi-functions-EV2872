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
 * @desc abstract class for child functions
 */
/**
 * @description abstract class for child functions
 */
export class Function {
    /**
     * @description evaluates the function in a given range
     * @param range where to evaluate the function
     * @param scale multiples the result to match the graph size
     * @param smoothRatio to make the line of the function smoother for the eye
     * @returns a vector with all the results
     */
    evaluateInRange(range, scale, smoothRatio) {
        let result = [];
        const SUPERIOR_LIMIT = range.getSuperiorLimit();
        for (let index = range.getInferiorLimit(); index < SUPERIOR_LIMIT; index += smoothRatio) {
            if (!this.isPossibleDivisor(index)) { }
            ;
            const COORDINATES = this.evaluateInAPoint(index, scale);
            result.push(COORDINATES);
        }
        return result;
    }
    /**
     * @description used to avoid possible errors with division by 0
     * @param divisor value to be checked
     * @returns true if different of zero
     */
    isPossibleDivisor(divisor) {
        return divisor !== 0;
    }
}
