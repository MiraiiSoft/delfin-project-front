import { Login } from "src/app/auth/interfaces/login.interface";

export interface IResponseUser {
    success: boolean;
    message?: string;
    data?: Login
}

export interface IRequestUpdateUser {
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    id_roll: number;
    id_persona: number;
    id_direccion: number;
    usuario: string;
    password?: string;
}