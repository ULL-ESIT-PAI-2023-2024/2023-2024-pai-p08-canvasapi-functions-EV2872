export class GridNumber {
    value;
    coordinates;
    constructor(value, coordinates) {
        this.value = value;
        this.coordinates = coordinates;
    }
    getValue() { return this.value; }
    getCoordinates() { return this.coordinates; }
}
