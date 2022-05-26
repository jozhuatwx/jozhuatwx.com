import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadDirective } from './load.directive';
import { LoadComponent } from './load.component';

@NgModule({
  declarations: [
    LoadDirective,
    LoadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadDirective,
    LoadComponent
  ]
})
export class LoadModule { }
