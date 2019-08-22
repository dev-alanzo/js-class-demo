export class Shoe {
    brand: string;
    model: string;
    size: number;
    
    constructor(brand: string, model: string, size: number) {
        this.brand = brand;
        this.model = model;
        this.size = size;
    }

    display() :string {
        return `Brand: ${this.brand}\nModel: ${this.model}\nSize: ${this.size}`;
    }
}