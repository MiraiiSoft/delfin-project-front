export interface Products {
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
    inventario:      Inventario[];
}

export interface Imagen {
    url: any[];
}

export interface Inventario {
    id_inventario:   number;
    id_producto:     number;
    existencias:     number;
    unidadesPaquete: number;
    numPaquete:      number;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toProducts(json: string): Products[] {
        return cast(JSON.parse(json), a(r("Products")));
    }

    public static productsToJson(value: Products[]): string {
        return JSON.stringify(uncast(value, a(r("Products"))), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Products": o([
        { json: "id_producto", js: "id_producto", typ: 0 },
        { json: "codigo_barras", js: "codigo_barras", typ: "" },
        { json: "nombre", js: "nombre", typ: "" },
        { json: "marca", js: "marca", typ: "" },
        { json: "descripcion", js: "descripcion", typ: "" },
        { json: "imagen", js: "imagen", typ: r("Imagen") },
        { json: "compra", js: "compra", typ: "" },
        { json: "precio_unitario", js: "precio_unitario", typ: "" },
        { json: "precio_mayoreo", js: "precio_mayoreo", typ: "" },
        { json: "precio_caja", js: "precio_caja", typ: "" },
        { json: "inicio_mayoreo", js: "inicio_mayoreo", typ: 0 },
        { json: "inicio_caja", js: "inicio_caja", typ: 0 },
        { json: "id_color", js: "id_color", typ: 0 },
        { json: "id_categoria", js: "id_categoria", typ: 0 },
        { json: "id_tipo", js: "id_tipo", typ: 0 },
        { json: "inventario", js: "inventario", typ: a(r("Inventario")) },
    ], false),
    "Imagen": o([
        { json: "url", js: "url", typ: a("any") },
    ], false),
    "Inventario": o([
        { json: "id_inventario", js: "id_inventario", typ: 0 },
        { json: "id_producto", js: "id_producto", typ: 0 },
        { json: "existencias", js: "existencias", typ: 0 },
        { json: "unidadesPaquete", js: "unidadesPaquete", typ: 0 },
        { json: "numPaquete", js: "numPaquete", typ: 0 },
    ], false),
};
