export interface Gtag {
  /**
   * Used by the config command to assign a target to one or more groups.
   */
  groups?: string | string[];

  /**
  * Sets the target account/property that is to receive the event data.
  */
  send_to?: string | string[];

  /**
  * JavaScript callback function called when processing of an event command has completed.
  */
  event_callback?: Function;

  /**
  * Timeout used for event_callback in milliseconds.
  */
  event_timeout?: number;
}
