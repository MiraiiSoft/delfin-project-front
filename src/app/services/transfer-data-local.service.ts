import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferDataLocalService {

  @Output() quantityCart: EventEmitter<number> = new EventEmitter();

  public quantity: number = 0;

  constructor() { }

  public emitQuantityToCart() {
    this.quantityCart.emit( this.quantity )
  }
}
