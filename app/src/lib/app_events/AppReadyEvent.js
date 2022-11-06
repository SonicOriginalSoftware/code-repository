import { AppEvent } from "../AppEvent.js"

export class AppReadyEvent extends AppEvent {
  /**
   * @type {Map<string, import("../AppEvent.js").EventHandler>}
   *
   * @protected
   */
  static _handlers = new Map()
}
