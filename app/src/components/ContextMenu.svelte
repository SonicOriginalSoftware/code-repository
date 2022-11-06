<script>
  // Will need a context-menu option for changing a subdivided note's
  // # of subdivisions and subdivision index
  // This will allow changing between syncopation and chord-ed notes

  // TODO Will also need to account for making context-actions on notes
  // So a context-menu needs to be persistently-available
  // to allow for deletion of notes, or modification of its accents, etc.
  /** @typedef {import("../lib/types.js").SvelteComponentDev} SvelteComponentDev */

  import Radio from "./Radio.svelte"

  import { hidden_important_class, toolbox_group } from "../lib/constants.js"
  import { current_symbol_element } from "../stores.js"

  /** @param {SvelteComponentDev?} symbol */
  function handle_symbol_changed(symbol) {
    deselect_element?.classList.add(hidden_important_class)

    selected_symbol = symbol
    if (symbol !== null)
      deselect_element.classList.remove(hidden_important_class)
  }

  /** @type {HTMLLabelElement} */
  let deselect_element

  /** @type {SvelteComponentDev?} */
  let selected_symbol

  /** @type {(element: Element?) => void} */
  export let symbol_selected

  current_symbol_element.subscribe(handle_symbol_changed)
</script>

<div id="context-menu">
  <div id="current-symbol-container" class="label-container">
    <span id="current-symbol-label" class="label">Selected Symbol:</span>
    <svelte:component this={selected_symbol} id="current-symbol" />
    <Radio
      id="no-symbol-option"
      group={toolbox_group}
      class_list="center-align-flex music-toolbox-note {hidden_important_class}"
      title="Deselect"
      on_change_handler={() => symbol_selected(null)}
      src_on="close"
      src_off="close"
      bind:label_ref={deselect_element}><span>Deselect</span></Radio
    >
  </div>
  <div id="staff-type-container" class="label-container">
    <span id="staff-type-label" class="label">Staff Type:</span>
  </div>
  <div id="default-meter-container" class="label-container">
    <span id="default-meter-label" class="label">Default Time Signature:</span>
  </div>
</div>

<style>
  #context-menu {
    border: 1px solid red;
  }

  .label-container {
    display: flex;
    align-items: center;
    min-height: 80px;
  }

  .label {
    margin: 10px 10px 10px 10px;
  }
</style>
