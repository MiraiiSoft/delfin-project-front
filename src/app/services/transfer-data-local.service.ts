import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferDataLocalService {

  @Output() quantityCart: EventEmitter<number> = new EventEmitter();

  constructor() { }
}
