import { v4 as uuid } from "uuid"

/** @typedef {(data: any) => Promise<void>} EventHandler */

export class AppEvent {
  /**
   * @type {Map<string, EventHandler>}
   *
   * @protected
   */
  static _handlers

  /** @param {EventHandler} handler */
  static add_handler(handler) {
    const handler_id = uuid()
    this._handlers.set(handler_id, handler)
    return handler_id
  }

  /** @param {string} handler_id */
  static remove_handler(handler_id) {
    return this._handlers.delete(handler_id)
  }

  /** @param {any} data */
  static fire(data) {
    for (const [_, each_handler] of this._handlers) {
      each_handler(data)
    }
  }
}
