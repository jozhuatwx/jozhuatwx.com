import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LoadModule } from 'src/app/components/load/load.module';
import { SocialLinksModule } from 'src/app/components/social-links/social-links.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LoadModule,
    SocialLinksModule
  ]
})
export class HomeModule { }
