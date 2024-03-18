// NOT IN USE
import { Coordinates } from '../utils/coordinates.js';
import { Function } from './function.js';
export class StraightLine extends Function {
    gradient;
    yIntercept;
    constructor(gradient, yIntercept) {
        super();
        this.gradient = gradient;
        this.yIntercept = yIntercept;
    }
    evaluateInAPoint(point, scale) {
        return new Coordinates(point * scale, (this.gradient * point + this.yIntercept) * scale);
    }
}
