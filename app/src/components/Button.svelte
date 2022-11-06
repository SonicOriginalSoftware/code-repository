<script>
  /** @type {string} */
  export let id
  /** @type {string} */
  export let title
  /** @type {string} */
  export let src
  /** @type {string} */
  export let class_list = ""

  /** @type {HTMLButtonElement} */
  let element
</script>

<button
  type="button"
  {id}
  class={class_list}
  bind:this={element}
  {title}
  on:click
>
  <span class="material-icons">{src}</span>
  <slot />
</button>

<style>
  button {
    /* Fix stupid default user-agent stylesheet */
    display: block;
    border: none;
    color: inherit;
    background-color: inherit;
    font: inherit;

    cursor: pointer;
    padding: 4px;
  }

  span {
    font-family: "Material Icons";
  }
</style>
