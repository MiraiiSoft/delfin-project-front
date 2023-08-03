export interface IResOneDireccion {
    success: boolean;
    message?: string;
    data?:    IDireccion;
}

export interface IDireccion {
    id_direccion:  number;
    codigo_postal: string;
    municipio:     string;
    calle:         string;
    colonia:       string;
    num:           string;
    telefono:      string;
    referencia:    string;
    id_ciudad:     number;
}