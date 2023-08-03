export interface IResAllCiudad {
    success: boolean;
    message?: string;
    data?:    ICiudad[];
}

export interface IResOneCiudad {
    success: boolean;
    message?: string;
    data?:    ICiudad;
}

export interface ICiudad {
    id_ciudad: number;
    ciudad:    string;
    id_pais:   number;
}