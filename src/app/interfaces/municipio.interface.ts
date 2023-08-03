import { Pais } from "./pais.interface";

export interface IResAllMunicipio {
    success: boolean;
    message?: string;
    data?:    IMunicipio[];
}

export interface IResOneMunicipio {
    success: boolean;
    message?: string;
    data?:    IMunicipio;
}

export interface IMunicipio {
    id_municipio: number;
    municipio:    string;
    id_ciudad:    number;
    ciudad:       Ciudad;
}

export interface Ciudad {
    id_ciudad: number;
    ciudad:    string;
    id_pais:   number;
    pais:      Pais;
}