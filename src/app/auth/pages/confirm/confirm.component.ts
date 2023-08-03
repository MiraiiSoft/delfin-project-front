import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  logoUrl: string = 'assets/img/auth/LogoPapeleria.png';
  logoError: string ='assets/img/auth/error.png';
  logoCorrect: string ='assets/img/auth/correct.png';

  resConfirm: {
    success: boolean,
    message?: string
  } = {
    success: false,
    message: ''
  };

  constructor( private activatedRoute: ActivatedRoute, private authService: AuthService, private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.openSpinner();

    this.activatedRoute.params
      .pipe(
        switchMap( ({token}) => this.authService.confimAccount(token) )
      )
      .subscribe( res => {
        this.resConfirm.success = res.success;
        this.resConfirm.message = res.message;
        this.closeSpinner();
      });
  }

  openSpinner(){
    this.dialog.open( SpinnerComponent, {
      disableClose: true
    } );
  }

  closeSpinner(){
    this.dialog.closeAll();
  }

}
