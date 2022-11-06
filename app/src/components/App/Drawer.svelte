<script>
  import Footer from "../Footer.svelte"
  import IconTray from "../IconTray.svelte"

  import { drawer_toggle_status } from "../../stores.js"

  /** @type {boolean} */
  let show_drawer

  /** @param {boolean} checked */
  function drawer_toggled_handler(checked) {
    show_drawer = checked
  }

  /** @type {HTMLDivElement} */
  let app_drawer

  drawer_toggle_status.subscribe(drawer_toggled_handler)
</script>

<div
  id="app-drawer"
  class={show_drawer ? "app-drawer-visible" : ""}
  bind:this={app_drawer}
>
  <IconTray id="contextual-icons">
    <!-- TODO -->
  </IconTray>
  <Footer />
</div>

<style>
  #app-drawer {
    position: absolute;
    overflow-x: hidden;
    height: 100%;
    width: 0;
    z-index: 10;
    background-color: var(--background-ui-primary);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    white-space: nowrap;

    transition: width 1s;
  }

  .app-drawer-visible {
    width: 100vw !important;
  }

  @media only screen and (min-width: 600px) {
    #app-drawer {
      position: relative;
      z-index: 0;
      height: auto;
      box-shadow: -2px 2px 12px -3px inset;
    }

    .app-drawer-visible {
      width: 25vw !important;
    }
  }
</style>
