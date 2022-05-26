import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperRoutingModule } from './developer-routing.module';
import { LoadModule } from 'src/app/components/load/load.module';
import { GalleryModule } from 'src/app/components/gallery/gallery.module';

import { DeveloperComponent } from './developer.component';

@NgModule({
  declarations: [
    DeveloperComponent
  ],
  imports: [
    CommonModule,
    DeveloperRoutingModule,
    LoadModule,
    GalleryModule
  ]
})
export class DeveloperModule { }
