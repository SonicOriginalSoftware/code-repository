<script>
  /** @type {string} */
  export let id

  /** @type {string} */
  export let group

  /** @type {string} */
  export let title = ""

  /** @type {string} */
  export let src_off = ""

  /** @type {string} */
  export let src_on = ""

  /** @type {string} */
  export let class_list = ""

  /** @type {string} */
  export let span_class_list = ""

  /** @type {((e: Event) => void) | null} */
  export let on_change_handler = null

  /** @type {HTMLLabelElement?} */
  export let label_ref = null

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
  type="radio"
  {id}
  name={group}
  class="hidden"
  {title}
  bind:this={element}
  on:change={on_change}
/>
<label
  bind:this={label_ref}
  for={id}
  id="{id}-label"
  class={class_list}
  {title}
>
  <span class="material-icons {span_class_list}">{src}</span>
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
