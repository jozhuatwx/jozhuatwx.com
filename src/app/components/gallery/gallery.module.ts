import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GalleryComponent } from 'src/app/components/gallery/gallery.component';

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule { }
