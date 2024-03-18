import { Coordinates } from '../utils/coordinates.js';
import { Function } from './function.js';
export declare class StraightLine extends Function {
    private gradient;
    private yIntercept;
    constructor(gradient: number, yIntercept: number);
    evaluateInAPoint(point: number, scale: number): Coordinates;
}
