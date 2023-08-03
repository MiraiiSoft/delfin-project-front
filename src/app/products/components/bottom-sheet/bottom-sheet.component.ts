import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {
  categoryPanel: boolean=false;
  colorPanel: boolean=false;
  brandPanel: boolean = false;
  constructor() { }

  categories: any = [
    {
      id_categoria: 1,
      categoria: "Lapiceros"
    },
    {
      id_categoria: 1,
      categoria: "Gomas"
    },
    {
      id_categoria: 1,
      categoria: "Tijeras"
    },
    {
      id_categoria: 1,
      categoria: "Libretas"
    }
  ]
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

  ngOnInit(): void {
  }

}
