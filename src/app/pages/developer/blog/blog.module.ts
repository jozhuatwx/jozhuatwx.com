import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';

import { BlogRoutingModule } from 'src/app/pages/developer/blog/blog-routing.module';
import { GalleryDetailsModule } from 'src/app/components/gallery/gallery-details/gallery-details.module';

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    GalleryDetailsModule
  ]
})
export class BlogModule { }
