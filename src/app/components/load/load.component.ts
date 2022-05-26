import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent {

  @Input() loading = false;
}
