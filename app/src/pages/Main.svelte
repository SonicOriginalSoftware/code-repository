<script>
  // FIXME The activation of the music symbols should work as a toggle
  // In order to "untoggle" the activation, the user must click on the symbol again
  // or perhaps come up with some key-shortcut

  import SheetMusicCanvas from "../components/SheetMusicCanvas.svelte"
  import MusicSymbolToolbox from "../components/MusicSymbolToolbox.svelte"
  import ContextMenu from "../components/ContextMenu.svelte"
  import { current_symbol_element } from "../stores.js"

  /** @param {Element?} element */
  function symbol_selected(element) {
    // @ts-ignore
    current_symbol_element.set(element)
  }
</script>

<header>
  <h1>Welcome to the Music Creation Tool Prototype!</h1>
  <span
    >Here we are testing basic functionality of initial rendering approaches.</span
  >
</header>

<div class="horizontal-layout">
  <MusicSymbolToolbox {symbol_selected} />
  <div class="vertical-layout">
    <ContextMenu {symbol_selected} />
    <SheetMusicCanvas />
  </div>
</div>

<style>
  header {
    text-align: center;
  }

  .vertical-layout {
    width: 50%;
  }
</style>
