export interface IResCartOne {
    success: boolean;
    message?: string;
    data?:    ICartOne;
}

export interface ICartOne {
    id_carrito:       number;
    id_login:         number;
    carrito_producto: CarritoProducto[];
}

interface CarritoProducto {
    id_carrito_producto: number;
    id_producto:         number;
    id_carrito:          number;
    cantidad_producto:   number;
    producto:            Producto;
}

interface Producto {
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

//Carrito_producto
export interface IResCartProduct_add {
    success: boolean;
    message: string;
    data:    ICartProduct_add;
}

export interface ICartProduct_req {
    id_producto:         number;
    id_carrito:          number;
    cantidad_producto:   number;
}

export interface ICartProduct_add {
    id_carrito_producto: number,
    id_producto:         number;
    id_carrito:          number;
    cantidad_producto:   number;
}

export interface IResDeleteCartProduct {
    success: boolean;
    message?: string;
    data?:    IDeleteCartProduct;
}

interface IDeleteCartProduct {
    id_carrito_producto: number;
    id_producto:         number;
    id_carrito:          number;
    cantidad_producto:   number;
}

