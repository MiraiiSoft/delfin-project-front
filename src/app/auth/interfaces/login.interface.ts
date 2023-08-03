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

export interface Login {
    id_login:    number;
    correo:      string;
    usuario:     string;
    is_verified: boolean;
    id_persona:  number;
    id_roll:     number;
    is_active:   boolean;
    persona:     Persona;
    roll:        Roll;
    id_carrito: number;
}

interface Persona {
    id_persona:   number;
    nombre:       string;
    apellido:     string;
    telefono:     string;
    id_direccion: number;
    direccion:    Direccion;
}

interface Direccion {
    id_direccion:  number;
    codigo_postal: string;
    calle:         string;
    colonia:       string;
    num:           string;
    telefono:      string;
    referencia:    string;
    id_ciudad:     number;
}

interface Roll {
    id_roll: number;
    roll:    string;
}