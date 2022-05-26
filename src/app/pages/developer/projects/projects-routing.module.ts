import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { GalleryDetailsComponent } from 'src/app/components/gallery/gallery-details/gallery-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProjectsComponent,
        data: {
          animation: 'ProjectsPage'
        }
      },
      {
        path: ':id',
        component: GalleryDetailsComponent,
        data: {
          animation: 'GalleryDetailsPage'
        }
      }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProjectsRoutingModule { }
