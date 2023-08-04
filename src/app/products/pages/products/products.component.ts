import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { IcardData } from 'src/app/shared/interfaces/card.interface';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../../components/bottom-sheet/bottom-sheet.component';
import { ProductosService } from 'src/app/services/productos.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { IsliderData } from 'src/app/shared/interfaces/slider.interface';
import { ColoresService } from 'src/app/services/colores.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  selected: string = ''
  categoryPanel: boolean = false;
  colorPanel: boolean = false;
  brandPanel: boolean = false;

  filter: string =''
  value: string = ''

  openBottomSheet(): void {
    this.bottom.open(BottomSheetComponent);
  }
  products: IcardData[] = [];

  categories: any = [];

  colors: any = [];

  brands: any = [
    'Bic',
    'Marca 2',
    'Marca 3'
  ]


  constructor(private productosServices:ProductosService, private coloresServices:ColoresService, private categoriasService: CategoriasService, private router: Router, public bottom: MatBottomSheet, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const urltree = this.router.parseUrl(this.router.url)
    this.filter = urltree.queryParams['filter']
    this.value = urltree.queryParams['value']

    if (this.value) {
      const id = parseInt(this.value);
      this.loadProducts(id);
    }

    this.categoriasService.getCategorias().subscribe(data => {
      const categoriaData: any[] = data.data.map(item => {
        return {
          id_categoria: item.id_categoria.toString(),
          categoria: item.categoria
        };
      });
      this.categories = categoriaData;
    });




    this.coloresServices.getColores().subscribe(data => {
      const colorData: any[] = data.data.map(item => {
        return{
          id_color: item.id_color.toString(),
          color: item.color,
          hexa: item.hexa
        };
      });
      this.colors = colorData;
    })

    
  }

  filterUrlId(filter: string, value: number) {
    const queryParams = { filter: filter, value: value };
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    });

    if (filter === 'category'){
      this.loadProducts(value);
    }else if (filter === 'color'){
      this.loadProducts(value);
    }else if (filter === 'brand'){

    }
  }

  loadProducts(filterValue: number) {
    if (this.filter === 'category') {
      this.productosServices.getProductosPorCategoria(filterValue).subscribe(data => {

      const productosData: IcardData[] = data.data.map(item => {
        return {
          title: item.nombre,
          img: item.imagen.url[0],
          id: item.id_producto,
          price: parseFloat(item.precio_unitario),
        };
      });
      this.products = productosData;
    });
    }else if (this.filter === 'color') {
      this.productosServices.getProductosPorColor(filterValue).subscribe(data => {

      const productosData: IcardData[] = data.data.map(item => {
        return {
          title: item.nombre,
          img: item.imagen.url[0],
          id: item.id_producto,
          price: parseFloat(item.precio_unitario),
        };
      });
      this.products = productosData;
    });
    }

  }




  public appendQueryParams(id: number) {
    this.router.navigate(['/site/products/detail'],{
      queryParams: {
        product: id
      }
    });
  }
}
