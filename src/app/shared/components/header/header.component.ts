import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router, private authService: AuthService ) { }

  iconUsr = "assets/img/user/iconoUsuario.png";
  imgLogo = "assets/img/auth/LogoPapeleria.png";
  imgLogoFace = "assets/img/social/Vectorface.png";
  iconActivate: string = "menu";
  _activateNav: boolean = false;
  quantity_products: number = 1;

  inLogin: boolean = false;
  nameUser: string = '';

  categorias = [
    {
      id_categoria: 1,
      categoria: "Papelería"
    },
    {
      id_categoria: 2,
      categoria: "Electrónica"
    },
    {
      id_categoria: 3,
      categoria: "Hogar"
    },
    {
      id_categoria: 4,
      categoria: "Boligrafo"
    },
    {
      id_categoria: 5,
      categoria: "Goma"
    },
    {
      id_categoria: 6,
      categoria: "lapiz adhesivo"
    },
    {
      id_categoria: 7,
      categoria: "Lápiz"
    },
    {
      id_categoria: 8,
      categoria: "Libreta"
    }
  ];

  ngOnInit(): void {
    this.nameUser = localStorage.getItem('user') || '';

    if( localStorage.getItem('token') == '' || localStorage.getItem('token') == undefined ){
      this.inLogin = false;
    }else{
      this.inLogin = true;
    }

  }

  redirectRoute( route: string ){
    this.router.navigate([route]);
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
  }

}
