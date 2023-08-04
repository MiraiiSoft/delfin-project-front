import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { Icategorias } from 'src/app/interfaces/categoria.interface';
import { CategoriasService } from 'src/app/services/categorias.service';
import { TransferDataLocalService } from 'src/app/services/transfer-data-local.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router, private authService: AuthService, public cartService:CartService,
    private transferDataLocal: TransferDataLocalService, private categoriaService: CategoriasService ) { }

  iconUsr = "assets/img/user/iconoUsuario.png";
  imgLogo = "assets/img/auth/LogoPapeleria.png";
  imgLogoFace = "assets/img/social/Vectorface.png";
  iconActivate: string = "menu";
  _activateNav: boolean = false;
  quantity_products: number = 0;

  inLogin: boolean = false;
  nameUser: string = '';
  carrito: string = '';

  categorias!: Icategorias[];

  ngOnInit(): void {
    this.nameUser = localStorage.getItem('user') || '';
    this.carrito = localStorage.getItem('carrito') || '';

    if( localStorage.getItem('token') == '' || localStorage.getItem('token') == undefined ){
      this.inLogin = false;

      if( this.router.routerState.snapshot.url.includes('user') ){
        this.router.navigate(['/site/home']);
      }

    }else{
      this.inLogin = true;

      this.cartService.getCartById(this.carrito).subscribe( res => {
        res.data.carrito_producto.forEach( () => {
          this.transferDataLocal.quantity += 1
        });
        this.transferDataLocal.emitQuantityToCart()
      })

      this.transferDataLocal.quantityCart.subscribe( quantity => {
        this.quantity_products = quantity;
      });
    }

    this.categoriaService.getCategorias().subscribe( res => {
      if( res.data ){
        this.categorias = res.data;
      }
    })

  }

  redirectRoute( route: string, options?: options ){

    if( !options ){
      this.router.navigate([route]);
    }

    if( options ){
      if( options.nameQueryParam == 'category' ){
        this.router.navigate([route], {
          queryParams: {
            filter: options.nameQueryParam,
            value: options.valueParam
          }
        })
      }
    }
  }

  activateNav(){
    this._activateNav = !this._activateNav;
    if( this.iconActivate == "menu" ){
      this.iconActivate = "close";
    }else{
      this.iconActivate = "menu";
    }
  }

  logout(){
    this.authService.logout();
    this.nameUser = '';
    this.inLogin = false;

    if( this.router.routerState.snapshot.url.includes('user') || this.router.routerState.snapshot.url.includes('cart') ){
      this.router.navigate(['/site/home']);
    }

  }

}

interface options {
  requiredParams: boolean;
  nameQueryParam: string;
  valueParam: string;
}
