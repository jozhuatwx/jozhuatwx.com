import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from 'src/app/pages/developer/projects/projects-routing.module';
import { LoadModule } from 'src/app/components/load/load.module';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import { GalleryModule } from 'src/app/components/gallery/gallery.module';
import { GalleryDetailsModule } from 'src/app/components/gallery/gallery-details/gallery-details.module';

import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    LoadModule,
    BreadcrumbModule,
    GalleryModule,
    GalleryDetailsModule
  ]
})
export class ProjectsModule { }
