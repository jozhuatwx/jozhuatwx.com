import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleryDetailsComponent } from 'src/app/components/gallery/gallery-details/gallery-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/developer',
        pathMatch: 'full'
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
export class BlogRoutingModule { }
