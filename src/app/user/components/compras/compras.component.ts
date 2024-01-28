import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { IShopping } from '../../interfaces/shopping.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {

  $user!: Subscription;
  compras: IShopping[] = [];

  constructor( private dialog: MatDialog, private userService: UserService, private datePipe: DatePipe ) { }
  
  ngOnInit(): void {

    this.$user = this.userService.getVentasById_login().subscribe( res => {
      if( res.data ){
        
        this.compras = res.data;
        
      }
    })
  }

  openSpinner(){
    this.dialog.open( SpinnerComponent, {
      disableClose: true
    } );
  }

  closeSpinner(){
    this.dialog.closeAll();
  }

  private transforDate(date: Date){
    return this.datePipe.transform(date, 'yyyy-MM-dd', "America/Bogota")
  }
}
