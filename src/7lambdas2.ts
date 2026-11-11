interface Estudiante{
    nombre: string;
    nota: number;
}

const estudiantes: Estudiante[] = [
    {nombre: "Mateo", nota: 20},
    {nombre: "Ramiro", nota: 12},
    {nombre: "Carlos", nota: 16},
    {nombre: "Jane", nota: 9},
];

const desaprobados = estudiantes.filter((estudiante: Estudiante)=> {
    return estudiante.nota < 13; // cuando el bloque tiene una sola instruccion se le puede quitar la llave en el constructor
                             // y cuando no se le pone la llave no es necesario poner return
});
console.log(desaprobados);

const reprobados = estudiantes.filter(
    estudiante => estudiante.nota <13
);
console.log(reprobados);




