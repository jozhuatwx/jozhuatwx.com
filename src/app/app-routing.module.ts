import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'developer',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/developer/developer.module').then(m => m.DeveloperModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('./pages/developer/projects/projects.module').then(m => m.ProjectsModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./pages/developer/blog/blog.module').then(m => m.BlogModule)
      },
      {
        path: 'certificates',
        loadChildren: () => import('./pages/developer/certificates/certificates.module').then(m => m.CertificatesModule)
      }
    ]
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
