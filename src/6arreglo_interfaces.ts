interface Alumno{
    nombre: string;
    edad: number;
    nota: number;
}

const alumnos : Alumno[] = []; //alumnos no se puedo volver a usar con la variable "const"
let alumno1: Alumno = {nombre:"Maria", edad:20, nota:10};
let alumno2: Alumno = {nombre:"Pedro", edad:22, nota:18};
alumnos.push(alumno1);
alumnos.push(alumno2);

console.log(alumnos);
console.log("---------------")
alumnos.forEach((alumno: Alumno) => {
    console.log(`Alumno: ${alumno.nombre} ${alumno.edad} ${alumno.nota}`);
})
