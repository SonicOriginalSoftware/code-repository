import { AppEvent } from "../AppEvent.js"

/** @typedef {{version: string, new_service_worker: ServiceWorker}} UpdateAvailableEventInfo */

export class UpdateAvailableEvent extends AppEvent {
  /**
   * @type {Map<string, import("../AppEvent.js").EventHandler>}
   *
   * @protected
   */
  static _handlers = new Map()
}
