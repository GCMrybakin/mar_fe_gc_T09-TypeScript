//Reto 1
//Haz una clase llamada Persona que siga las siguientes condiciones:
//● Sus atributos son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura.
//● Por defecto, todos los atributos menos el DNI serán valores por defecto según su tipo
//(0 números, cadena vacía para String, etc.). Sexo será hombre por defecto, usa una
//constante para ello.
//● Instancia al menos tres objetos.

class Persona {

    private nombre: string;
    public edad: number;
    public DNI: string;
    public genero: string = "H";
    public peso: number;
    public altura: number;
    
    constructor(newNom:string = "", newEdad:number = 0, newDNI:string, newGenero: string = "H", newPeso:number = 0, newAltura:number = 0){
        this.nombre = newNom;
        this.edad = newEdad;
        this.DNI = newDNI;
        this.genero = newGenero;
        this.peso = newPeso;
        this.altura = newAltura;
    }

}

const persona1 = new Persona("Juan", 25, "123456789");
const persona2 = new Persona("María", 30, "987654321", "M", 72, 1.73);
const persona3 = new Persona("Pedro", 40, "567890123", "H", 81, 1.81);

console.log(persona1);
console.log(persona2);
console.log(persona3);