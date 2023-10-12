import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog.component';
import { SharedModule } from '../shared/shared.module';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [CatalogComponent, OrderByPipe],
  imports: [
    RouterModule, SharedModule
  ],
  providers: []
})
export class CatalogModule { }
