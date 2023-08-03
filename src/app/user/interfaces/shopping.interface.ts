export interface IResShopping {
    success: boolean;
    data:    IShopping[];
}

export interface IShopping {
    id:          number;
    venta:       Venta;
    login:       Login;
    producto:    Producto[];
    monto_total: string;
}

interface Login {
    id_login:    number;
    correo:      string;
    usuario:     string;
    password:    string;
    is_verified: boolean;
    id_persona:  number;
    id_roll:     number;
    is_active:   boolean;
}

interface Producto {
    id_producto:       number;
    codigo_barras:     string;
    nombre:            string;
    marca:             string;
    descripcion:       string;
    imagen:            Imagen;
    compra:            string;
    precio_unitario:   string;
    precio_mayoreo:    string;
    precio_caja:       string;
    inicio_mayoreo:    number;
    inicio_caja:       number;
    id_color:          number;
    id_categoria:      number;
    id_tipo:           number;
    cantidad_producto: number;
}

interface Imagen {
    url: string[];
}

interface Venta {
    id_venta:     number;
    fecha_venta:  String;
    status_venta: string;
    id_envio:     number;
    id_pago:      number;
    pago:         Pago;
    envio:        Envio;
}

interface Envio {
    id_envio:          number;
    id_login:          number;
    fecha_envio:       String | null;
    fecha_entrega:     String | null;
    fecha_recoleccion: String | null;
    paqueteria:        string;
    status_envio:      string;
}

interface Pago {
    id_pago:     number;
    tocken_pago: string;
    monto:       string;
}