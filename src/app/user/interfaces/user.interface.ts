import { Login } from "src/app/auth/interfaces/login.interface";

export interface IResponseUser {
    success: boolean;
    message?: string;
    data?: Login
}