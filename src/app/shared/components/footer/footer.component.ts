import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

  there_sesion(): boolean {
    const token = localStorage.getItem('token') || ''
    if ( token != '' )
      return true
    else 
      return false
  }


}
