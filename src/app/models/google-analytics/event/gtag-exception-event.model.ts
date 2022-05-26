import { GtagEvent } from './gtag-event.model';
import { GtagExceptionEventObject } from './event-object/gtag-exception-event-object.model';

export class GtagExceptionEvent implements GtagEvent {

  action = 'exception';
  eventObject: GtagExceptionEventObject;

  constructor(eventObject: GtagExceptionEventObject) {
    this.eventObject = eventObject;
  }
}
