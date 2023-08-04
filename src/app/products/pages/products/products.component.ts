import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { IcardData } from 'src/app/shared/interfaces/card.interface';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../../components/bottom-sheet/bottom-sheet.component';
import { ProductosService } from 'src/app/services/productos.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { IsliderData } from 'src/app/shared/interfaces/slider.interface';
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

  colors: any = [
    {
      id_color: 1,
      color: 'Blanco',
      hexa: '#fffffff'
    },
    {
      id_color: 2,
      color: 'Blanco',
      hexa: '#fffffff'
    },
    {
      id_color: 3,
      color: 'Blanco',
      hexa: '#fffffff'
    },
  ]

  brands: any = [
    'Bic',
    'Marca 2',
    'Marca 3'
  ]


  constructor(private productosServices:ProductosService, private categoriasService: CategoriasService, private router: Router, public bottom: MatBottomSheet, private route: ActivatedRoute) { }

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


  }

  updateCategoryQueryParam(categoryId: number) {
    const queryParams = { filter: 'category', value: categoryId };
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    });
    this.loadProducts(categoryId);
  }

  loadProducts(categoryId: number) {
    this.productosServices.getProductosPorCategoria(categoryId).subscribe(data => {

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




  public appendQueryParams(id: number) {
    this.router.navigate(['/site/products/detail'],{
      queryParams: {
        product: id
      }
    });
  }
}
