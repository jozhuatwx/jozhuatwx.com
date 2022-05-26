import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

// mobile transitions
const MobilePushFromLeft = [
  query(':enter, :leave', [ style({ position: 'fixed', left: 0, width: '100%' }) ]),
  query(':enter', [ style({ left: '-100%' }) ]),
  group([
    query(':leave', [ animate('0.5s ease-in-out', style({ left: '100%' })) ]),
    query(':enter', [ animate('0.5s ease-in-out', style({ left: 0 })) ])
  ]),
  query(':enter', animateChild())
];
const MobilePushFromRight = [
  query(':enter, :leave', [ style({ position: 'fixed', right: 0 , width: '100%'}) ]),
  query(':enter', [ style({ right: '-100%' }) ]),
  group([
    query(':leave', [ animate('0.5s ease-in-out', style({ right: '100%' })) ]),
    query(':enter', [ animate('0.5s ease-in-out', style({ right: 0 })) ])
  ]),
  query(':enter', animateChild())
];
const MobileCoverFromRight = [
  query(':enter', [ style({ position: 'fixed', right: '-100%', height: '100%', width: '100%', backgroundColor: 'var(--background-darkest-colour)' }) ]),
  group([
    query(':leave', [ animate('1s ease-in-out', style({ opacity: 0 })) ]),
    query(':enter', [ animate('0.5s ease-in-out', style({ right: 0 })) ])
  ]),
  query(':enter', animateChild())
];
const MobileUncoverFromLeft = [
  query(':enter', [ style({ opacity: 0 }) ]),
  query(':leave', [ style({ position: 'fixed', right: 0, height: '100%', width: '100%', backgroundColor: 'var(--background-darkest-colour)' })]),
  group([
    query(':leave', [ animate('0.5s ease-in-out', style({ right: '-100%' })) ]),
    query(':enter', [ animate('1s ease-in-out', style({ opacity: 1 })) ])
  ]),
  query(':enter', animateChild())
];

export const PageAnimation = trigger('routerAnimations', [
  // mobile transitions
  transition('HomePage => *', MobilePushFromRight),
  transition('* => HomePage', MobilePushFromLeft),
  transition('DeveloperPage => ProjectsPage', MobileCoverFromRight),
  transition('ProjectsPage => DeveloperPage', MobileUncoverFromLeft),
  transition('ProjectsPage => GalleryDetailsPage', MobileCoverFromRight),
  transition('GalleryDetailsPage => ProjectsPage', MobileUncoverFromLeft),
  transition('DeveloperPage => GalleryDetailsPage', MobileCoverFromRight),
  transition('GalleryDetailsPage => DeveloperPage', MobileUncoverFromLeft),
  transition('SettingsPage => *', MobilePushFromLeft),
  transition('* => SettingsPage', MobilePushFromRight)
]);
