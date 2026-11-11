class Cuadrado{
    private lado: number;
    constructor(lado: number){
        this.lado = lado;
    }
    public calcularArea(){
        return Math.pow(this.lado, 2)
    }
}
let c: Cuadrado = new Cuadrado(4);
console.log(c);
console.log(c.calcularArea());