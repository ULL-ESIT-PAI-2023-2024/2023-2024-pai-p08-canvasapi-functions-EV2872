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

/**
 * @description class tha represenst the president of USA
 */
export class President {
  /**
   * @description to avoid having two different presidents even though they have the same name
   */
  private static instance: President;

  /**
   * @description getter for the pressident, if there is already one president
   *              it returns that one because we can´t have two (Singleton pattern)
   * @returns the current president
   */
  static getPresident(): President {
    if (!President.instance) {
      President.instance = new President();
    }
    return President.instance;
  }

  /**
   * @description getter for the name of the president
   * @returns name in string format
   */
  public getName(): string { return this.name; }

  /**
   * @description only one president can exist
   */
  private constructor(private name: string = 'Biden') {
  }
}