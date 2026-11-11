class Persona{
    nombre: string;
    edad: number;
    ocupacion: string;
    constructor(nombre: string, edad: number, ocupacion: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.ocupacion = ocupacion
    }
    mostrarInfo(): void {
        console.log(`${this.nombre} ${this.edad} ${this.ocupacion}`);
    }
}
let lista: Persona[] = [
    new Persona("Pepe", 21, "Ingeniero")
];
let p = new Persona("Maria", 21, "Enfermera");
lista.push(p);
console.log(lista);
console.log("-----------------------");
lista.forEach((persona: Persona) => {
    persona.mostrarInfo();
})