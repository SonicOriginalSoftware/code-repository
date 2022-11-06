<script>
  import { UpdateAvailableEvent } from "../../lib/app_events/UpdateAvailableEvent.js"
  import { UpdateRequestedEvent } from "../../lib/app_events/UpdateRequestedEvent.js"

  import Button from "../Button.svelte"

  let update_button_id = "updater"
  /** @type {ServiceWorker} */
  let new_service_worker
  /** @type {string} */
  let new_version

  /** @param {import("../../lib/app_events/UpdateAvailableEvent.js").UpdateAvailableEventInfo} data */
  async function update_available_handler(data) {
    if (data === null || data === undefined) return

    new_service_worker = data.new_service_worker
    new_version = data.version

    const update_button = document.getElementById(update_button_id)
    update_button?.classList.remove("hidden-important")
    update_button?.setAttribute("title", `Version: ${data.version}`)
  }

  function on_click() {
    UpdateRequestedEvent.fire({ version: new_version, new_service_worker })
  }

  UpdateAvailableEvent.add_handler(update_available_handler)
</script>

<Button
  id={update_button_id}
  title=""
  src="upgrade"
  class_list="hidden-important"
  on:click={on_click}
/>
