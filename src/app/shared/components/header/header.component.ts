import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router ) { }

  iconUsr = "assets/img/user/iconoUsuario.png";
  imgLogo = "assets/img/auth/LogoPapeleria.png";
  imgLogoFace = "assets/img/social/Vectorface.png";
  iconActivate: string = "menu";
  _activateNav: boolean = false;

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

}
