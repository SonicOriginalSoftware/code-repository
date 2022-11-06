<script>
  /** @type {string} */
  export let id

  /** @type {string} */
  export let title = ""

  /** @type {string} */
  export let src_off = ""

  /** @type {string} */
  export let src_on = ""

  /** @type {string} */
  export let class_list = ""

  /** @type {((e: Event) => void) | null} */
  export let on_change_handler = null

  /** @type {HTMLInputElement} */
  let element

  /** @type {string} */
  let src = src_off

  /** @param {Event} e */
  function on_change(e) {
    if (on_change_handler) on_change_handler(e)
    // @ts-ignore
    src = e.currentTarget?.checked ? src_on : src_off
  }
</script>

<input
  type="checkbox"
  {id}
  class="hidden"
  bind:this={element}
  {title}
  on:change={on_change}
/>
<label for={id} id="{id}-label" class={class_list} {title}>
  <span class="material-icons">{src}</span>
  <slot />
</label>

<style>
  label {
    border: none;
    color: inherit;
    background-color: inherit;
    font: inherit;
  }

  span {
    font-family: "Material Icons";
  }
</style>
