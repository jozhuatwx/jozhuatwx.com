import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'routerOutletAnimationPage'
})
export class RouterOutletAnimationPagePipe implements PipeTransform {

  transform(state: string, isMobile: boolean): string | undefined {
    if (!isMobile) {
      state += 'Desktop';
    }
    return state;
  }
}
