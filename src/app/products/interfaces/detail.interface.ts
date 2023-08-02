export interface Detail {
    id_producto:     number;
    codigo_barras:   string;
    nombre:          string;
    marca:           string;
    descripcion:     string;
    imagen:          Imagen;
    compra:          string;
    precio_unitario: string;
    precio_mayoreo:  string;
    precio_caja:     string;
    inicio_mayoreo:  number;
    inicio_caja:     number;
    id_color:        number;
    id_categoria:    number;
    id_tipo:         number;
    color:           Color[];
    tipo:            Tipo;
    categoria:       Categoria;
    inventario:      Inventario[];
}

interface Categoria {
    id_categoria: number;
    categoria:    string;
}

interface Color {
    id_color: number;
    color:    string;
    hexa:     string;
}

interface Imagen {
    url: string[];
}

interface Inventario {
    id_inventario:   number;
    id_producto:     number;
    existencias:     number;
    unidadesPaquete: number;
    numPaquete:      number;
}

interface Tipo {
    id_tipo: number;
    tipo:    string;
}
