<script>
  import Bar from "./components/App/Bar.svelte"
  import Drawer from "./components/App/Drawer.svelte"

  import { app_info_store, page_name_store } from "./stores.js"

  import {
    app_status_element,
    // registered,
    update_requested_handler,
  } from "./lib/service_worker.js"
  import { AppReadyEvent } from "./lib/app_events/AppReadyEvent.js"

  import { UpdateRequestedEvent } from "./lib/app_events/UpdateRequestedEvent.js"

  /** @type {import("svelte").SvelteComponent}*/
  let main_page

  /** @param {string} file */
  async function set_page(file) {
    main_page = (await import(`./pages/${file}.svelte`)).default
  }

  /** @param {import("./lib/service_worker.js").AppInfo} data */
  async function app_ready_handler(data) {
    app_info_store.set(data)
    document.title = data.name
    app_status_element?.remove()
  }

  function controller_change_handler() {
    sessionStorage.clear()
    console.log("New service worker registered! Reloading...")
    window.location.reload()
  }

  page_name_store.subscribe(set_page)

  AppReadyEvent.add_handler(app_ready_handler)
  UpdateRequestedEvent.add_handler(update_requested_handler)

  navigator.serviceWorker.addEventListener(
    "controllerchange",
    controller_change_handler
  )

  // navigator.serviceWorker
  //   .register("sw.js", {
  //     scope: "/",
  //     updateViaCache: "none",
  //     // type: 'module',
  //   })
  //   .then(registered)
  //   .catch(console.error)
</script>

<Bar />

<div class="horizontal-layout">
  <Drawer />
  <main>
    <svelte:component this={main_page} />
  </main>
</div>

<style lang="scss" global>
  @import "./styles/app";
  @import "./styles/fonts";
  @import "./styles/notes";
  @import "./styles/utilities";
  @import "./themes/default_dark";
  @import "./themes/default_light";

  .horizontal-layout {
    position: relative;
    flex: 1;
    display: flex;
  }

  main {
    position: relative;
    margin: 8px;
    flex: 1;
  }
</style>
