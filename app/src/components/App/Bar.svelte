<script>
  import IconTray from "../IconTray.svelte"
  import Toggle from "../Toggle.svelte"
  import Button from "../Button.svelte"
  import Update from "./Update.svelte"

  import { page_name_store, drawer_toggle_status } from "../../stores.js"

  // FIXME These buttons that navigate should be broken out into a NavButton
  // Which has a callback to page_name_store.set and the argument can be an
  // attribute in the element (the aria-label since its required anyway)

  function settings_click() {
    page_name_store.set("Settings")
  }

  function home_click() {
    page_name_store.set("Main")
  }

  /** @param {Event} e */
  function menu_toggled_callback(e) {
    // @ts-ignore
    drawer_toggle_status.set(e.currentTarget?.checked)
  }
</script>

<div id="app-bar">
  <Toggle
    id="menu-toggle"
    src_off="menu"
    src_on="close"
    title="Menu"
    on_change_handler={menu_toggled_callback}
    class_list="block pointer"
  />
  <IconTray id="app-shortcuts">
    <Update />
    <Button id="home" src="home" title="Go Home" on:click={home_click} />
    <Button
      id="settings"
      src="settings"
      title="Open App Settings"
      on:click={settings_click}
    />
  </IconTray>
</div>

<style>
  #app-bar {
    position: relative;
    margin: 8px;
    display: flex;
    justify-content: space-between;
    font-size: 2em;
  }

  :global(#menu-toggle-label) {
    padding: 4px;
  }
</style>
