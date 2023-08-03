export interface IResAllPais {
    success: boolean;
    message?: string;
    data?:    Pais[];
}

export interface IResOnePais {
    success: boolean;
    message?: string;
    data?:    Pais;
}

export interface Pais {
    id_pais: number;
    pais:    string;
}