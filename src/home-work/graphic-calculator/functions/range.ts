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
  /**
   * @description receives two values that will be the limits
   * @param inferiorLimit minimun value for f(x)
   * @param superiorLimit maximun value for f(x)
   */
  constructor(private inferiorLimit: number, private superiorLimit: number) {
    if (this.superiorLimit < this.inferiorLimit) {
      throw new Error('Invalid range');
    }
  }

  /**
   * @description getter for the inferior limit
   * @returns the inferior limit
   */
  public getInferiorLimit(): number { return this.inferiorLimit; }

  /**
   * @description getter for the superior limit
   * @returns the superior limit
   */
  public getSuperiorLimit(): number { return this.superiorLimit; }
}