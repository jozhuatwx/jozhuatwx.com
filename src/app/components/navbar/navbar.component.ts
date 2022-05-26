import { AfterViewInit, Component } from '@angular/core';

import { HttpRequestService } from 'src/app/services/http-request/http-request.service';
import { NavigationLink } from 'src/app/models/navigation-link.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  links: NavigationLink[] | undefined;

  constructor(
    private httpRequestService: HttpRequestService
  ) { }

  ngAfterViewInit(): void {
    this.httpRequestService.getData<NavigationLink[]>('navigation-links.json')
      .subscribe((json) => this.links = json);
  }
}
