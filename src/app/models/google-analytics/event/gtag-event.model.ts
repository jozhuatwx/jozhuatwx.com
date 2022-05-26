import { GtagEventObject } from './event-object/gtag-event-object.model';

export interface GtagEvent {
  /**
   * The value that will appear as the event action in Google Analytics Event reports.
   */
  action: string;

  /**
   * The event object that will be sent to Google Analytics.
   */
  eventObject: GtagEventObject;
}
