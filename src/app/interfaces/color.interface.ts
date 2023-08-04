export interface IResColores {
    success: boolean;
    message: string;
    data:    Icolores[];
}

export interface Icolores {
    id_color: number;
    color:    string;
    hexa:     string;
}
