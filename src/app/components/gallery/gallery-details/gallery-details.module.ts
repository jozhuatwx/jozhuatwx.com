import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryDetailsComponent } from './gallery-details.component';

import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [
    GalleryDetailsComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  exports: [
    GalleryDetailsComponent
  ]
})
export class GalleryDetailsModule { }
