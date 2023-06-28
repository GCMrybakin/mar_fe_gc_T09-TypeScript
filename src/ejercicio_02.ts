//Haz una clase llamada Password que siga las siguientes condiciones:
//● Que tenga los atributos longitud y contraseña . Por defecto, la longitud será de 8.
//● Los constructores serán los siguientes:
//Incluye el método que genere una contraseña aleatoria con esa longitud.

class password {
    private longitud: number = 8;
    private contraseña: string;

    constructor(nuevoLong: number = 8){
        this.longitud = nuevoLong;
        this.contraseña = this.generarNuevaContraseña();
    }

    private generarNuevaContraseña(): string {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let contraseña = '';

        for (let i = 0; i < this.longitud; i++) {
            const indice = Math.floor(Math.random() * caracteres.length);
            contraseña += caracteres.charAt(indice);
        }
        return contraseña;
    }
    getContraseña(): string {
        return this.contraseña;
    }
}

const longitudContrasena = 9;
const generador = new password(longitudContrasena);
const contrasenaGenerada = generador.getContraseña();
console.log(contrasenaGenerada);