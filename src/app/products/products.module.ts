import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './pages/detail/detail.component';
import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from '../material/material.module';
import { ProductsComponent } from './pages/products/products.component';
import { SharedModule } from "../shared/shared.module";
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';

@NgModule({
    declarations: [
        DetailComponent,
        ProductsComponent,
        BottomSheetComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        MaterialModule,
        SharedModule
    ]
})
export class ProductsModule { }
