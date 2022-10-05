import { Component, Input } from '@angular/core';

import { GalleryData, GalleryDataEnum } from 'src/app/models/gallery-data.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  @Input() data: GalleryData[] = [];
  @Input() dataType = GalleryDataEnum.BLOG;
  @Input() flexRow = false;
  @Input() numberOfResults = 10;
  @Input() showMore = false;
  @Input() showMoreLink = '';
  @Input() infiniteScroll = false;

  displayedData: GalleryData[] = [];

  ngOnInit(): void {
    this.selectProjects();
  }

  ngOnChanges(): void {
    this.selectProjects();
  }

  private selectProjects(): void {
    this.displayedData = [];

    const length = this.numberOfResults <= this.data.length ? this.numberOfResults : this.data.length;

    for (let index = 0; index < length; index++) {
      this.displayedData.push(this.data[index]);
    }
  }
}
