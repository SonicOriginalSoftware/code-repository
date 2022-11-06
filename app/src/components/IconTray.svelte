<script>
  /** @type {string} */
  export let id
</script>

<div {id}>
  <slot />
</div>

<style>
  div {
    display: flex;
  }
</style>
