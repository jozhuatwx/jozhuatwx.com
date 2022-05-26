import { GtagEventObject } from './gtag-event-object.model';

export interface GtagExceptionEventObject extends GtagEventObject {
  /**
   * A description of the error.
   */
  description?: string;

  /**
   * `true` if the error was fatal.
   */
  fatal?: boolean;
}
