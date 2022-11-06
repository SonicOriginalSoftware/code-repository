import { AppReadyEvent } from "./app_events/AppReadyEvent.js"
import { UpdateAvailableEvent } from "./app_events/UpdateAvailableEvent.js"

export const app_status_element = document.getElementById("app-status")

/** @typedef {"get_app_info" | "get_db_info" | "get_oauth_info" | "update"} Messages */
/** @typedef {{name: string, version: string, author: string}} AppInfo */

/**
 * @param {Messages} message
 * @param {ServiceWorker?} sw
 */
async function message(message, sw = navigator.serviceWorker.controller) {
  if (!sw) {
    return Promise.reject("Service worker not ready for messaging")
  }
  const messageChannel = new MessageChannel()
  messageChannel.port1.start() // Required when using eventListener interface

  const messagePromise = new Promise((resolve, reject) => {
    messageChannel.port1.addEventListener("messageerror", (ev) => reject(ev))
    messageChannel.port1.addEventListener("message", (ev) => resolve(ev.data))
  })

  sw.postMessage(message, [messageChannel.port2])

  return messagePromise
}

/**
 * @param {ServiceWorker} service_worker
 *
 * @returns {Promise<AppInfo | null>}
 */
export async function get_service_worker_info(service_worker) {
  try {
    return await message("get_app_info", service_worker)
  } catch (ex) {
    console.error(ex)
    return null
  }
}

/** @param {import("./app_events/UpdateRequestedEvent.js").UpdateRequestedEventInfo} data */
export async function update_requested_handler(data) {
  message("update", data.new_service_worker)
}

/** @param {ServiceWorkerRegistration} registered_service_worker */
export async function registered(registered_service_worker) {
  console.debug("Service worker finished registering!")
  if (
    registered_service_worker.active === undefined ||
    registered_service_worker.active === null
  ) {
    return console.warn("No service worker active!")
  } else if (registered_service_worker.installing) {
    return
  }

  AppReadyEvent.fire(
    await get_service_worker_info(registered_service_worker.active)
  )

  const new_service_worker = registered_service_worker.waiting
  if (new_service_worker === null) return

  UpdateAvailableEvent.fire(await get_service_worker_info(new_service_worker))
}
