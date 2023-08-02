export interface IResCategorias {
    success: boolean;
    message: string;
    data:    Icategorias[];
}

export interface Icategorias {
    id_categoria: number;
    categoria:    string;
}
