export interface GetObeCart {
    success?: boolean;
    message?: string;
    data:    CartOne;
}

export interface CartOne {
    id_carrito:       number;
    id_login:         number;
    carrito_producto: CarritoProducto[];
}

export interface CarritoProducto {
    id_carrito_producto: number;
    id_producto:         number;
    id_carrito:          number;
    cantidad_producto:   number;
    producto:            Producto;
}

export interface Producto {
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
    tipo:            Tipo;
    inventario:      Inventario[];
    color:           Color;
}

export interface Color {
    id_color: number;
    color:    string;
    hexa:     string;
}

export interface Imagen {
    url: string[];
}

export interface Inventario {
    id_inventario:   number;
    id_producto:     number;
    existencias:     number;
    unidadesPaquete: number;
    numPaquete:      number;
}

export interface Tipo {
    id_tipo: number;
    tipo:    string;
}

export interface UpdateCarritoProducto {
    id_producto:         number;
    id_carrito:          number;
    cantidad_producto:   number;
}
