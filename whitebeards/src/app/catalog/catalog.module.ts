import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    RouterModule, SharedModule
  ],
  providers: []
})
export class CatalogModule { }
