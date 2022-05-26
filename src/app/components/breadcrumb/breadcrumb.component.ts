import { Component } from '@angular/core';

import { Breadcrumb } from 'src/app/models/breadcrumb.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  breadcrumbs: Breadcrumb[] = [];

  constructor() {
    const path = window.location.pathname.split('/');
    this.breadcrumbs.push({
      title: path[1],
      url: path[1]
    });

    for (let i = 2; i < path.length - 1; i++) {
      this.breadcrumbs.push({
        title: path[i],
        url: `${this.breadcrumbs[i - 2].url}/${path[i]}`
      });
    }
  }
}
