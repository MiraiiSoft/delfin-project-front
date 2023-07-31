export interface ILogin {
    user: string,
    pass: string
}

export interface IResponseAuth{
    success: boolean,
    message?: string
    data?: Login
}

export interface IRegistro{
    nombre:     string;
    apellido:   string;
    telefono:   string;
    correo:     string;
    usuario:    string;
    contraseña: string;
}

interface Login {
    id_login:    number;
    correo:      string;
    usuario:     string;
    password:    string;
    is_verified: boolean;
    id_persona:  number;
    id_roll:     number;
    is_active:   boolean;
    persona:     Persona;
    roll:        Roll;
    id_carrito:  number;
}

interface Persona {
    id_persona:   number;
    nombre:       string;
    apellido:     string;
    telefono:     string;
    id_direccion: number;
}

interface Roll {
    id_roll: number;
    roll:    string;
}