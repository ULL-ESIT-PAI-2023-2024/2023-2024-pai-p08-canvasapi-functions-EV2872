import { Coordinates } from "../coordinates.js";
import { Function } from "./function.js";
export class Sin extends Function {
    constructor() { super(); }
    evaluateInAPoint(point) {
        return new Coordinates(point, Math.sin(point));
    }
}
