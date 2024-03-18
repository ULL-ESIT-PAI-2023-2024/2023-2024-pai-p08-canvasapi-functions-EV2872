import { Coordinates } from "../coordinates";
export declare class GridNumber {
    private value;
    private coordinates;
    constructor(value: number, coordinates: Coordinates);
    getValue(): number;
    getCoordinates(): Coordinates;
}
