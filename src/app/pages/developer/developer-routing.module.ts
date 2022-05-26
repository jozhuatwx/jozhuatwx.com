import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeveloperComponent } from './developer.component';

const routes: Routes = [
  {
    path: '',
    component: DeveloperComponent,
    data: {
      animation: 'DeveloperPage'
    }
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DeveloperRoutingModule { }
