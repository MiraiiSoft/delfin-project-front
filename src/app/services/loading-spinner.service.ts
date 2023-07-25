import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  constructor( private dialog: MatDialog ) { }

  public openSpinner(){
    this.dialog.open( SpinnerComponent, {
      disableClose: true
    } );
  }

  public closeSpinner(){
    this.dialog.closeAll();
  }
}
